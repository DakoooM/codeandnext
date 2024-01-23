import Section from "@/components/Section";
import Heading from "@/components/Heading";

function HeaderPage({
  left = undefined,
  right = undefined,
  height = undefined,
  pageId = "home-present",
  children
}) {
  const styling = {};

  if (height && typeof height === "number") {
    styling.height = height;
  }

  return (
    <Section cls="HeaderPage" style={styling} uniqueId={pageId}>
      <div className="HeaderPageContainer">
        <div className="present-left">
          <Heading level={1}>{children}</Heading>
          {left}
        </div>

        <div className="present-right">
          {right}
        </div>
      </div>
    </Section>
  )
}

export default HeaderPage;