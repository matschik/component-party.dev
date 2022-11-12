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
  // regex to grab what is inside angular component template inside backticks
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
  let regexForWrapper = /<pre([\s\S]*?)><code>([\s\S]*?)<\/code><\/pre>/gm;
  let code = regexForWrapper.exec(html);
  return code[2];
}

export function isAngularComponent(fileContent) {
  return (
    fileContent.includes("@angular/core") && fileContent.includes("template")
  );
}
