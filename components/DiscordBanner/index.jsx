import Heading from "../Heading";
import { Button } from "@/components/Button";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import image from "@/public/img/image.png";
import { Discord_Config } from "@/config";

function DiscordBanner({ marginBottom = 0 }) {
  const styling = { marginBottom: `${marginBottom}px` };

  return (
    <div className="DiscordBanner" style={styling}>
      <div className="discord_container">
        <Image src={image} alt="" draggable={false} className="background"/>

        <Heading level={3} className="head_white">Rejoins-Nous dès maintenant</Heading>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iusto asperiores velit aliquam nam aliquid?</p>
        <Button href={Discord_Config.link} theme="" variant="outlined" color="white" borderColor="white" icon={<FaDiscord />}>Rejoindre Discord</Button>

        <iframe src={Discord_Config.widgetLink} className="discord-widget" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </div>
  )
}

export default DiscordBanner;