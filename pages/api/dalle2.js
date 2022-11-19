//sends array of image urls to api/dalle2

export default async function handler(req, res) {

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  console.log('THISISQUERY', req.query.q)

  const response = await openai.createImage({
    prompt: req.query.q,
    n: 2,
    size: "1024x1024",
  });

  var image_urls = response.data.data.map(item=>{return item.url})
  res.status(200).json(image_urls)
}