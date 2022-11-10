import astroHighlightCode from "@/components/CodeHighlight/astroHighlightCode.js";

export async function highlightAngularComponent(
  fileContent,
  theme,
  wrap,
  fileExt
) {
  const templateCode = getAngularTemplateCode(fileContent);

  if (!templateCode) return fileContent;

  const componentWithEmptyTemplate = removeAngularTemplateContent(fileContent);

  let templateCodeHighlighted = await astroHighlightCode({
    code: templateCode,
    lang: "html",
    theme,
    wrap,
  });

  let componentHighlighted = await astroHighlightCode({
    code: componentWithEmptyTemplate,
    lang: fileExt,
    theme,
    wrap,
  });

  return componentHighlighted.replace(
    "template",
    "template: `" + removeCodeWrapper(templateCodeHighlighted) + "`,"
  );
}

function getAngularTemplateCode(fileContent) {
  // regex to grab whats inside angular component template inside backticks
  const regex = /template:\s*`([\s\S]*?)`/gm;

  // grab the template string
  const template = regex.exec(fileContent);

  if (template) return template[1];

  return "";
}

function removeAngularTemplateContent(fileContent) {
  let componentWithoutContentInsideTemplate = fileContent.replace(
    /template:\s*`([\s\S]*?)([^*])`,?/gm,
    "template"
  );

  return componentWithoutContentInsideTemplate;
}

function removeCodeWrapper(html) {
  html = html.replace(
    '<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code>',
    ""
  );
  return html.replace("</code></pre>", "");
}

export function isAngularComponent(fileContent) {
  return (
    fileContent.includes('from "@angular/core"') &&
    fileContent.includes("template:")
  );
}
