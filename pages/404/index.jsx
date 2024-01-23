import Heading from "@/components/Heading";
import HtmlHead from "@/components/HtmlHead";

function NotFound() {
  return (
    <div>
      <HtmlHead title="Page Introuvable"/>
      <Heading level={1}>Page introuvable</Heading>
      <p>{"Cette page n'existe pas mais vous pouvez toujours naviguer!"}</p>
    </div>
  )
}

export default NotFound;