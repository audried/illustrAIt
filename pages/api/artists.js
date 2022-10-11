import {getUsersTopArtists} from '../../lib/spotify';
import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {setArtistData} from '../../lib/artist_utils';

//TODO: move genres/popularity logic to here
const artist_handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});

  

  let jsonArray = await Promise.all([(await getUsersTopArtists(accessToken)).json(),(await getUsersTopTracks(accessToken)).json()])
    // .then(async (res) => {
    //     return Promise.all(
    //         res.map(async (data) => await data.json())
    //     )
    // })
    console.log("jasonarray", jsonArray)
  
 
//   const [response, response2] = await Promise.all([getUsersTopArtists(accessToken),getUsersTopTracks(accessToken)])
//   const {items2} = await response2.json();
//   const {items} = await response.json();
  
//   console.log("items:",response)
//   console.log("items2:",response2)


//   const artistdata = setArtistData(items)
//   return res.status(200).json(artistdata);
};

export default artist_handler;