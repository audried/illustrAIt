import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const track_handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  const response = await getUsersTopTracks(accessToken);
  const {items} = await response.json();

  return res.status(200).json({items});
};

export default track_handler;