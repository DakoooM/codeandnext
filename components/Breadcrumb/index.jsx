import useUtils from "@/hooks/useUtils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react"
import { BiHome, BiSolidChevronRight } from "react-icons/bi";

function BreadcrumbItem({
  show = true,
  link = "/",
  separator = true,
  active = true,
  label = "",
  icon = undefined
}) {
  if (show) {
    return (
      <Fragment>
        <Link href={link} className={!active ? "Link disabled" : "Link"}>
          {icon}{label}
        </Link>

        {separator ? <BiSolidChevronRight className="bread_sep"/> : undefined}
      </Fragment>
    )
  }
}

function Breadcrumb({
  minHeight = 50,
  disabledItems = [],
  hideItems = [],
  queryReplace = {},
  path = undefined
}) {
  const { uuid, capitalize } = useUtils();
  const router = useRouter();
  const { pathname, query } = router;

  let currentLink = "";

  const rts = pathname.split("/").filter(c => c !== "");

  const clientRoutes = rts.map((cLink, index) => {
    const keyId = cLink.replace("[", "").replace("]", "");

    const replaced = queryReplace[keyId] ? queryReplace[keyId] : false;
    const linkReplacer = query[keyId] ? query[keyId] : false;

    currentLink += `/${linkReplacer || cLink}`;
    const dItem = disabledItems.find(d => d === !replaced ? cLink : replaced);
    const hidingItem = hideItems.find(d => d === cLink);
    const showLastSep = index + 1 < rts.length;

    // console.log("replaced", query, query[cLink], replaced);

    return <BreadcrumbItem
      link={currentLink}
      active={!dItem}
      separator={showLastSep}
      show={!hidingItem}
      key={uuid()}
      label={replaced || capitalize(cLink)}
    />
  });

  const serverRoutes = undefined;

  return (
    <div className="Breadcrumb" style={{ minHeight: minHeight }}>
      <BreadcrumbItem icon={<BiHome />} />
      {!path ? clientRoutes : serverRoutes}
    </div>
  )
}

export default Breadcrumb;