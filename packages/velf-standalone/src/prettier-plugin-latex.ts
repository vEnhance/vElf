import * as LatexParser from "@unified-latex/unified-latex-velf";
const prettierPluginLatex = LatexParser.prettierPluginLatex;

export const options = {};

export const defaultOptions = {
  useTabs: true,
};

export default { ...prettierPluginLatex, options };
