import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Button } from "../Button";
import { BiCopy } from "react-icons/bi";
import useClipboard from "@/hooks/useClipboard";
import { BsCheck } from "react-icons/bs";

function Code({ language = "javascript", children }) {
  const [copied, copy] = useClipboard();

  return (
    <div className="CodeSpace">
      <SyntaxHighlighter language={language ?? null} style={atomOneDark}>
        {children ?? ""}
      </SyntaxHighlighter>

      <Button
        classes="copy"
        borderColor="transparent"
        bgColor="transparent"
        width={40}
        height={40}
        icon={copied === "copied" ? <BsCheck size={25}/> : <BiCopy size={20}/>}
        onClick={() => copy(children)}
      />
    </div>
  )
}

export default Code;