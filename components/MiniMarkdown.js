import ReactMarkdown from "react-markdown";

export const MiniMarkdown = ({ children }) => {
  return <ReactMarkdown components={{
    strong: ({ node, ...props }) => <strong style={{ fontWeight: 500 }} {...props} />,
  }}>{children}</ReactMarkdown>;
};
