import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {setArtistData} from '../../lib/artist_utils';

//TODO: move genres/popularity logic to here
const artist_handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});

  
 
  const response = await getUsersTopArtists(accessToken)

  const {items} = await response.json();
  
  const artistdata = setArtistData(items)
  return res.status(200).json(artistdata);
};

export default artist_handler;