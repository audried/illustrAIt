import {getUsersInfo} from '../../lib/spotify';
import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {userLookup} from '../../lib/user_lookup';
import {putUser} from '../../lib/user_lookup';
import { generatePrompt } from '../../lib/generate_prompt';
//sends array of image urls to api/dalle2

export default async function handler(req, res) {
    try {
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
                res.status(200).json({"message":"Already used today", "image_urls": user["image_urls"], "promptArr": user["promptArr"]})
                return
            }
        }

        var tracks;
        var artists;
        
        await Promise.all([getUsersTopTracks(accessToken, 'short_term'), getUsersTopArtists(accessToken, 'short_term')])
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(jsonObjects => {
            tracks = jsonObjects[0].items
            artists = jsonObjects[1].items
        });
        const promptArr = generatePrompt(tracks,artists)
        console.log(promptArr)

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        console.log('THISISQUERY', promptArr[0])

        const response = await openai.createImage({
            prompt: promptArr[0],
            n: 2,
            size: "1024x1024",
        });

        var image_urls = response.data.data.map(item=>{return item.url})
        const put = putUser(email, image_urls, promptArr)
        res.status(200).json({"image_urls": image_urls, "promptArr": promptArr})
    } catch (ex){
        console.log(ex.data.error)
        console.log(ex.data.error.json())
        res.status(500).json({error: ex})
    }
}
