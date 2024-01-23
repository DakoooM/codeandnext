import { prisma } from "@/utils/database";
import slugify from "slugify";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { pageId } = req.query;

    try {
      const subject = "Comprendre les hooks avec ReactJS";
      const subject_url = slugify(subject, { locale: "fr", lower: true });
      const article_desc = `Je vous présente ce tutoriel qui permet de comprendre ReactJS et autres languages de proggramation.
___
# Nous sommes combien ?
nous Faisons partie d'un grosse communauté qui permet de surélever autrement dit qui sommes nous ?
____

`;

      const result = await prisma.posts.create({
        data: {
          subject: subject,
          subject_url: subject_url,
          description: article_desc,
          level: "beginner",
          technology: "react",
          author_name: "Dakoum",
          author_profile: "id_user",
          public: true,
        }
      })

      res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: {
          message: error.message,
          version: error.clientVersion
        }
      });
    }
  } else {
    res.status(500).json({
      success: false
    })
  }
}