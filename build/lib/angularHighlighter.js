import { codeToHighlightCodeHtml } from "./highlighter.js";

export function mustUseAngularHighlighter(fileContent) {
  return (
    fileContent.includes("@angular/core") && fileContent.includes("template")
  );
}

export async function highlightAngularComponent(fileContent, fileExt) {
  const templateCode = getAngularTemplateCode(fileContent);

  let codeHighlighted = "";
  if (templateCode) {
    const componentWithEmptyTemplate =
      removeAngularTemplateContent(fileContent);
    const templateCodeHighlighted = await codeToHighlightCodeHtml(
      templateCode,
      "html"
    );

    const componentWithoutTemplateHighlighted = await codeToHighlightCodeHtml(
      componentWithEmptyTemplate,
      fileExt
    );

    codeHighlighted = componentWithoutTemplateHighlighted.replace(
      "template",
      "template: `" + removeCodeWrapper(templateCodeHighlighted) + "`,"
    );
  } else {
    codeHighlighted = codeToHighlightCodeHtml(fileContent, fileExt);
  }

  return codeHighlighted;
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
  const componentWithoutContentInsideTemplate = fileContent.replace(
    /template:\s*`([\s\S]*?)([^*])`,?/gm,
    "template"
  );

  return componentWithoutContentInsideTemplate;
}

function removeCodeWrapper(html) {
  const regexForWrapper = /<pre([\s\S]*?)><code>([\s\S]*?)<\/code><\/pre>/gm;
  const code = regexForWrapper.exec(html);
  return code[2];
}
