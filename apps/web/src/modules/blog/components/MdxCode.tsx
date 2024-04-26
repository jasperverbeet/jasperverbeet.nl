import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Typography from "@/modules/ui/components/Typography/Typography";
import { Children, forwardRef } from "react";
import themeStyles from "../syntax-styles/themeStyles";

const MdxCode = forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(({ children }) => {
  if (Children.count(children) !== 1) {
    throw new Error("Code component must have exactly one child");
  }

  return (
    <Typography variant="monoSm" asChild>
      <SyntaxHighlighter style={themeStyles} language="js" wrapLongLines={true}>
        {children as string}
      </SyntaxHighlighter>
    </Typography>
  );
});

export default MdxCode;
