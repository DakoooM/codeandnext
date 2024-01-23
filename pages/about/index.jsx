import HeaderPage from "@/components/HeaderPage";
import HtmlHead from "@/components/HtmlHead";

export default function AboutPage() {
  const leftHeader = (
    <p>left content here</p>
  );

  const rightHeader = (
    <p>right content</p>
  )

  return (
    <div className="aboutpage">
      <HtmlHead title="About"/>

      <HeaderPage left={leftHeader} right={rightHeader} pageId="home-present">
        {"Découvrez tout ce qu'il y a savoir"}
      </HeaderPage>
    </div>
  )
}
