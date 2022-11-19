// Next.js API route support: https://nextjs.org/docs/api-routes/introduction import {getUsersTopArtists} from '../../lib/spotify'; import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import fetch from 'node-fetch';

export default async function handler(req, res) {
    var url = req.query.q
    if (url.slice(0,57) !== "https://oaidalleapiprodscus.blob.core.windows.net/private") {
        res.status(400).send("Bad request")
        return
    }
    const keys = Object.keys(req.query)
    keys.forEach((key, index) => {
        if (key !== "q") {
            url = url + "&" + key + "=" + encodeURIComponent(req.query[key])
        }
    })

    fetch(url).then(actual => {
        actual.headers.forEach((v, n) => res.setHeader(n, v));
        actual.body.pipe(res);
    }); 
} 
