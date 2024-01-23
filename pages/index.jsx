import HtmlHead from "@/components/HtmlHead";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import DiscordBanner from "@/components/DiscordBanner";
import IconHomePresent from "@/public/svg/icon-home-present.svg";
import {TextGradient} from "@/components/TextGradient";
import Image from "next/image";

import { Button } from "@/components/Button";
import { AiFillEye } from "react-icons/ai";
import { IoIosPodium } from "react-icons/io";
import { BiLogInCircle, BiSolidWatch } from "react-icons/bi";
import { useModal } from "@/hooks/useModal";
import { PiBooks } from "react-icons/pi";
import HeaderPage from "@/components/HeaderPage";
import useUtils from "@/hooks/useUtils";
import VideoPlayer from "@/components/VideoPlayer";

function HomeArticle({ title, children, icon }) {
  return (
    <article className="home-artc-adv">
      {icon}
      <Heading level={2}>{title}</Heading>
      <p className="artcl-paragraph">{children}</p>
    </article>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()

  return { props: { repo } };
}

function HomePage({ repo }) {
  const { format } = useUtils()
  const { infos } = useModal();

  const leftHeader = (
    <>
      <p className="home-p-desc">
        Découvrez +{format(repo.stargazers_count)} tutoriels sur le développement !
        <br/>Devenez un expert en programmation, bases de données, et plus encore.
        <br/>Apprenez, créez, évoluez !
      </p>

      <div className="btn-row">
        <Button variant="contained" rounded size="large" onClick={() => infos(true, "signup")} icon={<BiLogInCircle />}>{"S'inscrire"}</Button>
        <Button variant="outlined" rounded size="large" href="/tutoriels" icon={<PiBooks/>}>Découvrir</Button>
      </div>
    </>
  );

  const rightHeader = (
    <Image
      src={IconHomePresent}
      draggable={false}
      alt="Icone de représentation d'un développeur"
      className="iconPresent"
    />
  )

  return (
    <div className="homepage">
      <HtmlHead title="Accueil" description="Apprenez le développement très simplement."/>

      <HeaderPage left={leftHeader} right={rightHeader} pageId="home-present">
        Découvrez la magie de<br />{"l'apprentissage"}
      </HeaderPage>

      <Section cls="home-advantages" uniqueId="home-advantages">
        <div className="home-adv-ctn">
          <HomeArticle title="Contenu" icon={<AiFillEye className="artcl-icon" />}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi quas molestiae tempore saepe doloribus deserunt quod aut nulla similique.
          </HomeArticle>

          <HomeArticle title="Qualité" icon={<IoIosPodium className="artcl-icon" />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus in voluptates? Ipsam, error molestiae asperiores labore dolorum id ducimus, rerum voluptate nostrum laborum magnam odit? Quo consequuntur at animi?
          </HomeArticle>

          <HomeArticle title="Régularité" icon={<BiSolidWatch className="artcl-icon" />}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quos quasi, at ipsum quod sit possimus laborum modi cumque quo excepturi autem odio voluptate necessitatibus soluta maxime dicta magni tempore esse illum! Quae doloribus esse saepe, accusantium magnam culpa.
          </HomeArticle>
        </div>
      </Section>

      <Section cls="home-video" uniqueId="home-video">
        <div className="home-video-ctn">
          <div className="video-left">
            <Heading level={3} className="h1-size l-h-40">
              Découvrez simplement
              <br/>
              <TextGradient>
                Votre projet!
              </TextGradient>
            </Heading>

            <p className="video_paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel iure libero architecto perspiciatis optio quisquam incidunt recusandae et a, esse debitis, eveniet quia suscipit nesciunt officiis cumque! Numquam, ratione accusantium.</p>
            <Button href="/about" variant="outlined" size="large" rounded borderSize={2}>En savoir plus...</Button>
          </div>

          <div className="video-right">
            <VideoPlayer video_id="aNxHlK8hixQ"/>
          </div>
        </div>
      </Section>

      <DiscordBanner />
    </div>
  )
}

export default HomePage;