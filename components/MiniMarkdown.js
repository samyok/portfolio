import ReactMarkdown from "react-markdown";
import { Link } from "@chakra-ui/react";
import rehypeRaw from "rehype-raw";

const customRenderers = {
  strong: ({ node, ...props }) => <strong style={{ fontWeight: 400 }} {...props} />,
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  a: ({ node, ...props }) => (
    <Link variant={"highlighted"} style={{ color: "inherit", textDecoration: "none" }} {...props} />
  ),
};
export const MiniMarkdown = ({ children, renderers = {} }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ ...customRenderers, ...renderers }}>
      {children}
    </ReactMarkdown>
  );
};
