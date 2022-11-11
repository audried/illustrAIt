// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {userLookup} from '../../lib/user_lookup';
import {getUsersInfo} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import { generatePrompt } from '../../lib/generate_prompt';

const prompt_handler = async (req, res) => {

    const {
        token: {accessToken},
    } = await getSession({req});

    var tracks;
    var artists;

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
            res.status(400).json({"message":"Already used today", "image_urls": user["image_urls"]}).send()
            return
        }
    }
    await Promise.all([getUsersTopTracks(accessToken, 'short_term'), getUsersTopArtists(accessToken, 'short_term')])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(jsonObjects => {
        tracks = jsonObjects[0].items
        artists = jsonObjects[1].items
    });


    res.status(200).json(generatePrompt(tracks,artists))
} 
export default prompt_handler;
