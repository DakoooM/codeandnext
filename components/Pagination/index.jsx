import { useRouter } from "next/router";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export function PaginateItem({
  label = undefined,
  actualPage = undefined,
  type = undefined, /* 0: décremente, 1: incrémente */
  number = 1,
  maxPages
}) {
  const router = useRouter();
  const pageInt = parseInt(actualPage);

  function changePage (nmbr) {
    console.log("change page", nmbr);

    const opts = {
      pathname: router.pathname,
      query: { ...router.query, page: nmbr }
    }

    router.push(opts);
  }
  
  function handleClick(type, number, actual, mPages) {
    if (type === "item") {
      changePage(number);
      return;
    }

    if (type === "remove") {
      if (actual === 1) return;

      return changePage(actual-1);
    }
    
    if (type === "add") {
      console.log("maxpages add", actual, mPages);
      
      if (actual === mPages) return;

      return changePage(actual + 1);
    }
  }

  const activeItem = type === "item" && number === actualPage ? "active" : "";
  const disabledItem = type === "disabled" ? "disabled" : "";

  return (
    <div 
      className={`PaginateItem ${disabledItem} ${activeItem}`} 
      onClick={() => handleClick(type, number, pageInt, maxPages)}
    >
        {label ? label : number}
    </div>
  )
}

export function Pagination({
  actualPage = 1,
  items = [],
}) {
  console.log("items.length", items.length);

  return (
    <div className="Pagination">
      <PaginateItem type="remove" actualPage={actualPage} label={<BiSolidLeftArrow className="pag_icons" />} />
      {
        items.map(numberOfPage => 
          <PaginateItem 
            type="item" 
            actualPage={actualPage} 
            key={numberOfPage} 
            number={numberOfPage} 
            maxPages={items.length - 1}
          />
        )
      }
      <PaginateItem type="disabled" label="..." />
      <PaginateItem type="add" actualPage={actualPage} label={<BiSolidRightArrow className="pag_icons" />} />
    </div>
  )
}
