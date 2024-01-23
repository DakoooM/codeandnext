import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

function GotoTop() {
  const [showGoto, setGoto] = useState(false);

  const scrolTo = (posY = 0) => {
    window.scrollTo({
      top: posY,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const onScrolling = () => {
      setGoto(window.scrollY >= 100);
    }

    window.addEventListener("scroll", onScrolling);

    return () => window.removeEventListener("scroll", onScrolling);
  }, []);

  const condition =  showGoto ? "GotoTop show" : "GotoTop";
  const onScroll = () => showGoto && scrolTo();

  return (
    <div className={condition} onClick={onScroll}>
      <BiChevronUp className="gotoIcon"/>
    </div>
  )
}

export default GotoTop;