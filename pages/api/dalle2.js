import {getUsersInfo} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {userLookup} from '../../lib/user_lookup';
import {putUser} from '../../lib/user_lookup';

export default async function handler(req, res) {
    const {
    token: {accessToken},
    } = await getSession({req});

    const userInfo = await getUsersInfo(accessToken) 
    const userJson = await userInfo.json()
    const email = userJson["email"]
    if (email == null || email.length <= 6) {
        res.status(400).json({"message":"Invalid email."})
        return
    }
    
    const user = await userLookup(email)
    if (user) {
        if (user["hasUsed"]) {
            console.log("has used", user["hasUsed"])
            res.status(400).json({"message":"Already used today"}).send()
            return
        }
    }


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

    var image_urls = response.data.data.map(item=>{return item.url})
    const put = putUser(email, image_urls)

    res.status(200).json(image_urls)
}
