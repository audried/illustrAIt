import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {setTrackData} from '../../lib/track_utils';
//import from spotify - danceabiility api call

//get item ids
//call danceability const
const track_handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});

  const response = await getUsersTopTracks(accessToken);
  const {items} = await response.json();

  const trackdata = setTrackData(items)

  return res.status(200).json(trackdata);
  
};

export default track_handler;