import { Dalle } from "dalle-node"

export default async function handler(req, res) {

  // const token = process.env.BEARER_TOKEN;
  // console.log("token, ", token)
  // const dalle = new Dalle(token);
  // const generations = await dalle.generate(req.query.q);
  // res.status(200).json({ result: generations })

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: req.query.q,
    n: 2,
    size: "1024x1024",
  });

  var image_urls = []
  image_urls.push(response.data.data[0].url)
  image_urls.push(response.data.data[1].url)
  res.status(200).json(image_urls)
}