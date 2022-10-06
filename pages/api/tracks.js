import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
//import from spotify - danceabiility api call

//get item ids
//call danceability const
const track_handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  console.log("in tracks")
  const response = await getUsersTopTracks(accessToken);
  console.log(response.body)
  const {items} = await response.json();
  console.log(items)
  return res.status(200).json({items});
};

export default track_handler;