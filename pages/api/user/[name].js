// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const { name } = req.params;
  
    res.status(200).json({ name: name })
  }
}