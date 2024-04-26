const themeStyles = {
  'code[class*="language-"]': {
    color: "var(--text-code)",
    background: "none",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "var(--text-code)",
    background: "#282a36",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "var(--fill-code)",
    color: "var(--text-code-on-fill)",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "var(--text-code-comment)",
  },
  prolog: {
    color: "var(--text-code-comment)",
  },
  doctype: {
    color: "var(--text-code-comment)",
  },
  cdata: {
    color: "var(--text-code-comment)",
  },
  punctuation: {
    color: "var(--text-code-punctuation)",
  },
  ".namespace": {
    opacity: ".7",
  },
  property: {
    color: "var(--text-code-property)",
  },
  tag: {
    color: "var(--text-code-property)",
  },
  constant: {
    color: "var(--text-code-property)",
  },
  symbol: {
    color: "var(--text-code-property)",
  },
  deleted: {
    color: "var(--text-code-property)",
  },
  boolean: {
    color: "var(--text-code-property)",
  },
  number: {
    color: "var(--text-code-property)",
  },
  selector: {
    color: "var(--text-code-selector)",
  },
  "attr-name": {
    color: "var(--text-code-selector)",
  },
  string: {
    color: "var(--text-code-selector)",
  },
  char: {
    color: "var(--text-code-selector)",
  },
  builtin: {
    color: "var(--text-code-selector)",
  },
  inserted: {
    color: "var(--text-code-selector)",
  },
  operator: {
    color: "var(--text-code-operator)",
  },
  entity: {
    color: "var(--text-code-operator)",
    cursor: "help",
  },
  url: {
    color: "var(--text-code-operator)",
  },
  ".language-css .token.string": {
    color: "var(--text-code-operator)",
  },
  ".style .token.string": {
    color: "var(--text-code-operator)",
  },
  atrule: {
    color: "var(--text-code-keyword)",
  },
  "attr-value": {
    color: "var(--text-code-keyword)",
  },
  keyword: {
    color: "var(--text-code-keyword)",
  },
  function: {
    color: "var(--text-code-function)",
  },
  variable: {
    color: "var(--text-code-variable)",
  },
  regex: {
    color: "var(--text-code-variable)",
  },
  important: {
    color: "var(--text-code-variable)",
    fontWeight: "bold",
  },
  "class-name": {
    color: "var(--text-code-selector)",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
} satisfies { [key: string]: React.CSSProperties };

export default themeStyles;
