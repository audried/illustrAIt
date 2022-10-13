import { Dalle } from "dalle-node"

export default async function handler(req, res) {

  const token = process.env.BEARER_TOKEN;
  const dalle = new Dalle(token);
  const generations = await dalle.generate(req.query.q);
  res.status(200).json({ result: generations })
}