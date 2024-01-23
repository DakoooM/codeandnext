import { Markdown_Components } from "@/config";
import ReactMarkdown from "react-markdown";

function MarkdownEditor({ children }) {
  return (
    <div className="MarkdownItems">
      <ReactMarkdown disallowedElements={["h1"]} components={Markdown_Components}>{children ?? ""}</ReactMarkdown>
    </div>
  )
}

export default MarkdownEditor;