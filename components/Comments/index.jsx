import { Fragment, useState } from "react"
import Heading from "../Heading"
import { InputWithLabel, TextAreaWithLabel } from "@/components/Inputs";
import { Button } from "../Button";
import Image from "next/image";

import soixantePar from "@/public/img/60x60.png";
import Link from "next/link";

export const Comment = ({ 
  id = 1,
  photo = soixantePar,
  subject = "Test d'un commentaire",
  content = "dako est beau",
  displayName = "DakoM",
  profile_id = "dakom-15478",
  postedAt = 1692291322,
  editAt = 1692291322
}) => {
  const dPosted = new Date(postedAt);

  return (
    <div className="comment">
      <Image src={photo} draggable={false} className="com_photo" alt={`Logo de ${displayName}`} width={60} height={60}/>

      <div className="comment_ctn">
        <div className="comment_principal">
          <p className="subject">{subject}</p>
          <p className="message">{content}</p>
        </div>
        
        <span className="cms_name">
          Publié par <Link href={`profile/${profile_id}`} target="_self" className="cms_link">{displayName}</Link> Le {dPosted.toLocaleDateString("fr-FR")} à {dPosted.toLocaleTimeString("fr-FR")}
        </span>
      </div>
    </div>
  )
}

export const Comments = ({ comms }) => {
  return <div className="CommentsContainer">
  {
    comms.map((com, unique) => (
      <Comment key={unique} {...com}/>
    ))
  }
  </div>
}

export const CommentForm = ({ 
  comms = [], 
  onAddComment = () => {}
}) => {
  const [comment_subj, setCommentSubj] = useState("");
  const [comment_msg, setCommentMsg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log("submitted", "comment_subj", comment_subj, "comment_msg", comment_msg);

    if (onAddComment) onAddComment(comment_subj, comment_msg);

    /* 
      id: 1,
      subject: comment_subj,
      content: "dako est beau",
      displayName: "DakoM",
      profile_id: "dakom-15478",
      postedAt: 1692291322,
      editAt: 1692291322
    */
  }
  
  return (
    <Fragment>
      <Heading level={3} className="comment_title">
        {comms.length} Commentaire{comms.length > 1 ? "s" : ""}
      </Heading>

      <form className="comment_form" onSubmit={e => handleSubmit(e)}>
        <InputWithLabel 
          label="Sujet" 
          value={comment_subj} 
          holder="Sujet du commentaire"
          onChange={e => setCommentSubj(e.target.value)}
        />

        <TextAreaWithLabel 
          label="Commentaire" 
          value={comment_msg} 
          onChange={e => setCommentMsg(e.target.value)} 
          holder="Ce tutoriel ma permis de m'améliorer."
        />
        <Button type="submit">Envoyer</Button>
      </form>
    </Fragment>
  )
}

export const CommentsContainer = ({ children }) => {
  return (
    <div className="CommentArea">
      {children}
    </div>
  )
}