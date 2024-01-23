import { prisma } from "@/utils/database"

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { pageId } = req.query;

    try {
      const data = await prisma.posts.findFirstOrThrow({
        where: {
          subject_url: pageId
        },
      })

      res.status(200).json({
        data: data
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: error.message,
          clientVersion: error.clientVersion
        }
      });
    }
  }
}