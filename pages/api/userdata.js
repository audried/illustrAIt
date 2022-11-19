// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getAudioFeatures} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import { parseData } from '../../lib/parse_data';

const handler = async (req, res) => {

  const {
    token: {accessToken},
  } = await getSession({req});
  
  var tracks;
  var artists;
  var ids;
  const time_range = req.query.time_range
  var userdata

  await Promise.all([getUsersTopTracks(accessToken, time_range), getUsersTopArtists(accessToken, time_range)])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(jsonObjects => {
    tracks = jsonObjects[0].items
    artists = jsonObjects[1].items
    ids = jsonObjects[0].items.map(t=>{return t.id})
  })

  const audio_features_response = await getAudioFeatures(accessToken, ids)
  const audio_features_json = await audio_features_response.json()
  userdata = parseData(tracks,artists, audio_features_json["audio_features"])
  
  res.status(200).json(userdata)
} 
export default handler;