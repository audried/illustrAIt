// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import { generatePrompt } from '../../lib/generate_prompt';

const prompt_handler = async (req, res) => {

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

  
  res.status(200).json(generatePrompt(tracks,artists))
} 
export default prompt_handler;