import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import useUtils from "@/hooks/useUtils";
import { v4 as uuidv4 } from "uuid";
import { BiTimer } from "react-icons/bi";

export function CardContainer({ children }) {
  return <div className="CardContainer">{children}</div>
}

export function Card({
  subject_url,
  subject = "Apprendre les base ReactJS",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quasi dolores quos quo incidunt rem consequuntur nobis explicabo officia est, soluta temporibus odit, dolorem perferendis laborum doloremque aliquid praesentium voluptate accusamus, aspernatur deleniti reiciendis optio saepe vel! Dignissimos excepturi eos iste repellendus voluptates repudiandae dolorem ipsum nam? Id, reiciendis repellat.",
  level = "beginner",
  footer = {time: 360},
  icons = [
    // "https://imgs.search.brave.com/8tjPbtKDGfwhQQT8-DhRbajx85BOCxvAJ1dAgMgs620/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9yZWFjdC0yLnN2/Zw.svg", 
    // "https://grafikart.fr/uploads/icons/laravel.svg"
  ],
}) {
  const { capitalize, timeFormat } = useUtils();

  const levelsEnums = {
    "beginner": 1,
    "amateur": 2,
    "expert": 3
  }

  return (
    <article className="Card" title={subject}>
      <div className="card_body">
        <div className="card_icons">
            {
              icons.map(img => {
                const uniqueId = uuidv4();

                return (
                  <Image 
                    key={uniqueId}
                    src={img} 
                    draggable={false} 
                    className="img-icons" 
                    width={40} 
                    height={40} 
                    alt="Image de représentation" 
                  />
                )
              })
            }
        </div>

        <Heading level={2} className="card_title">
          <Link href={`tutoriels/${subject_url}`} className="card_link">
            {subject}
          </Link>
        </Heading>
        
        <div className="card_desc">{description}</div>

        <div className="card_level">
          <Link href={{query: {level: levelsEnums[level]}}} className={`level_link ${level}`}>
            {capitalize(level)}
          </Link>
        </div>
      </div>

      <div className="card_footer">
        <span className="card_f_info"></span>

        <span className="card_f_time">
          <BiTimer className="footer_icon"/>
          {timeFormat(footer.time)}
        </span>
      </div>
    </article>
  )
}