import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import Heading from "../Heading";

export default function FooterList({ title, list }) {
  return (
    <ul className="column">
      <Heading level={5}>{title}</Heading>

      <div className="links">

        {
          list?.map(itm =>
            <Link
              href={itm.href}
              className="itm-link"
              target={itm.target || "_self"}
              alt="Lien de navigation footer"
              key={itm.href}
            >
              {itm.icon ? itm.icon : undefined}
              {itm.label}
            </Link>
          )
        }
      </div>
    </ul>
  )
}