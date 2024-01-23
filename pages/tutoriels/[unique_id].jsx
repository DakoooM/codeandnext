// External
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGmail, BiLogoTwitter } from "react-icons/bi";
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";

// Internals
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import HtmlHead from "@/components/HtmlHead";
import { CommentForm, Comments, CommentsContainer } from "@/components/Comments";
import MarkdownEditor from "@/components/MarkdownEditor";
import { Langs_Available } from "@/config";
import VideoPlayer from "@/components/VideoPlayer";
import { isNull } from "@/utils/features";
import { fetcher } from "@/utils/fetcher";
import author_img from "@/public/img/dakom.jpg"
import SharePage from "@/components/SharePage";
import { useState } from "react";

export async function getServerSideProps({ query }) {
  const { unique_id } = query;
  const { data } = await fetcher(`/api/post/select/where?pageId=${unique_id}`);

  const comments = [
    {
      id: 1,
      subject: "Super Tutoriel",
      content: "J'ai adoré, c'est très bien expliqué.",
      displayName: "Gcassinis",
      profile_id: "dakom-15478",
      postedAt: 1692291322,
      editAt: 1692291322
    },
    {
      id: 1,
      subject: "Super Tutoriel",
      content: "J'ai adoré, c'est très bien expliqué.",
      displayName: "Gcassinis",
      profile_id: "dakom-15478",
      postedAt: 1692291322,
      editAt: 1692291322
    },
  ]

  if (isNull(data)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      _comments: comments,
      data: data || null
    }
  };
}

function TechnoItem({
  lang = undefined,
  children
}) {
  const TechnoInfos = lang ? Langs_Available[lang] : false;

  return (
    <Link href={{ pathname: "/tutoriels", query: { lang: lang } }} className="techno-item" title={TechnoInfos ? `Voir tout les Tutoriels ${TechnoInfos.label}` : undefined}>
      {
        TechnoInfos && TechnoInfos.image ? (
          <Image
            className="techno-img"
            src={TechnoInfos.image}
            alt={`language de proggramation ${TechnoInfos.extension}`}
          />
        ) : undefined
      }

      {children ?? undefined}
    </Link>
  )
}

function TutorialPage({ _comments, data }) {
  const [comments, setComments] = useState(_comments);
  const share_url = `https://codeandchill.fr/tutoriels/${data?.subject_url}`;

  // dako est beau

  const onAddCommentary = (subject, msg) => {
    console.log("On add comment", subject, msg, subject === "", msg === "");

    setComments([...comments, {
      id: 1,
      subject: subject,
      content: msg,
      displayName: "DakoM" + Math.floor(Math.random() * 5),
      profile_id: "dakom-" + Math.floor(Math.random() * 5000),
      postedAt: Date.now(),
      editAt: Date.now()
    }]);
  }

  return (
    <div className="LearnPage">
      <HtmlHead title={data.subject} description={"Le tutoriel vous explique comment faire du preact!"} />

      <Container width={100} height={true} mBottom={100}>
        <Container width={80}>
          <Breadcrumb queryReplace={{ "unique_id": data.subject }} />

          <Heading className="title" level={1}>
            {data.subject}
          </Heading>

          <VideoPlayer />
        </Container>

        <Container cls="about-tutorial" width={80} mTop={50}>
          <Container cls="learn-left" width={100}>
            <Heading className="about-tutorial" level={2}>A Propos du Tutoriel</Heading>
            <MarkdownEditor>{data.description}</MarkdownEditor>

            <CommentsContainer>
              <CommentForm comms={comments} onAddComment={onAddCommentary}/>

              <hr className="main-separator" />

              <Comments comms={comments} />
            </CommentsContainer>
          </Container>

          <Container width={100} center={false} cls="learn-right">
            <div className="uploadAt">
              <small className="small">Publié il y a 4 jours</small>
            </div>

            <div className="technology">
              <Heading level={3} className="tech-title">Technologies utilisées</Heading>

              <div className="techo-list">
                <TechnoItem lang="javascript">ReactJS</TechnoItem>
                <TechnoItem lang="html">HTML</TechnoItem>
                <TechnoItem lang="css">CSS</TechnoItem>
              </div>
            </div>

            <div className="author">
              <Link className="card_author" href="/profile/dakom">
                <Image src={author_img} className="photo" width={40} height={40} alt="Logo" />

                <div className="infos">
                  <strong className="author_title">Auteur:</strong>
                  <p className="name">DakoM</p>
                </div>
              </Link>
            </div>

            <div className="share">
              <Heading level={3} className="share_title">Partager</Heading>

              <SharePage title={data.subject} url={share_url} />
            </div>
          </Container>

        </Container>
      </Container>
    </div>
  )
}

export default TutorialPage;