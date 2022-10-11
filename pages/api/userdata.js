// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import { parseData } from '../../lib/parse_data';

const handler = async (req, res) => {

  const {
    token: {accessToken},
  } = await getSession({req});
  
  var tracks;
  var artists;

  await Promise.all([getUsersTopTracks(accessToken), getUsersTopArtists(accessToken)])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(jsonObjects => {
    tracks = jsonObjects[0].items
    artists = jsonObjects[1].items
  });

  
  res.status(200).json(parseData(tracks,artists))
} 
export default handler;