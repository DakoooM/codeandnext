import { prisma } from "@/utils/database"

// current_page / last_page / total_item

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { page = 1, start = 0, end = 20 } = req.query;

    try {
      const [ result, count_posts ] = await prisma.$transaction([
        prisma.posts.findMany({
          skip: parseInt(start),
          take: parseInt(end)
        }),
        
        prisma.posts.findMany({})
      ]);

      const listOfPages = [];
      const pages = Math.ceil(count_posts.length / end);

      for (let i = 0; i < pages; i++) {
        listOfPages.push(i + 1);
      }

      res.status(200).json({
        total: count_posts.length,
        pages: listOfPages,
        data: result
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}