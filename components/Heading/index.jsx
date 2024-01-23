import { createElement } from "react"

function Heading({ level = 1, children, ...props }) {
  const generateClass = `TitleH${level} ${props.className || ""}`;
  props.className = generateClass;
  const newProps = props;

  return createElement(`h${level}`, newProps, children);
}

export default Heading;