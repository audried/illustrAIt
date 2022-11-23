// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {userLookup} from '../../lib/user_lookup';
import {getUsersInfo} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const check_used_handler = async (req, res) => {

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
    if (user && email!='audreydockendorf1@gmail.com') {
        if (user["hasUsed"]) {
            console.log("has used", user["hasUsed"])
            res.status(200).json({"message":"Already used today", "image_urls": user["image_urls"], "promptArr": user["promptArr"]})
            return
        }
    } else {
        res.status(200).json({"message":"User has not yet generated an image today."})
    }
} 
export default check_used_handler;
