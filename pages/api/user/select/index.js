import { prisma } from "@/utils/database"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          password: true
        }
      })
    
      res.status(200).json(result);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}