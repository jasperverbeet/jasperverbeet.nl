import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";
import type { Root } from "hast";
import type { BuiltinLanguage, BuiltinTheme, Highlighter } from "shiki";
import { bundledLanguages, getHighlighter } from "shiki";

import type { LanguageInput } from "shiki/core";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const inlineShikiRegex = /(.*){:(.*)}$/;

export type RehypeInlineShikiOptions = RehypeShikiCoreOptions & {
  /**
   * Language names to include.
   *
   * @default Object.keys(bundledLanguages)
   */
  langs?: Array<LanguageInput | BuiltinLanguage>;
};

export const rehypeInlineShiki: Plugin<[RehypeInlineShikiOptions], Root> = (
  options = {} as RehypeInlineShikiOptions,
) => {
  const themeNames = ("themes" in options ? Object.values(options.themes) : [options.theme]).filter(
    Boolean,
  ) as BuiltinTheme[];
  const langs = options.langs || Object.keys(bundledLanguages);

  let promise: Promise<Highlighter>;

  return async (tree) => {
    if (!promise)
      promise = getHighlighter({
        themes: themeNames,
        langs,
      });
    const highlighter = await promise;
    return visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "code") return;

      // biome-ignore lint/suspicious/noExplicitAny: we don't have enough type information here
      const match = (node.children[0] as any)?.value?.match(inlineShikiRegex);
      if (!match) return;

      const [, code, lang] = match;
      const hast = highlighter.codeToHast(code, { ...options, lang });

      // biome-ignore lint/suspicious/noExplicitAny: we don't have enough type information here
      const inlineCodePre = hast.children[0] as any;
      const inlineCode = inlineCodePre.children[0];

      console.log(inlineCodePre);

      inlineCode.properties.class =
        `${inlineCodePre.properties.class} inline border border-border-primary border-b-2`.trim();
      inlineCode.properties.style = inlineCodePre.properties.style;

      if (!inlineCode) return;

      parent?.children.splice(index ?? 0, 1, inlineCode);
    });
  };
};
