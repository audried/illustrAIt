import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import homeStyles from '../styles/Home.module.css';

//TOD0:
  //dont show 0's before 'show my top stuff button is pressed
  //can get popularity from artist and track
  //can get genre from artist get / artist/{id} 
  //can get danceability, energy and acousticness from track get /audio-features + id
  //remove parentheses
  //takes 2 button clicks to load average song popularity



export default function Home() {
  const {data: session} = useSession();
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [trackids, setTrackIds] = useState([]);
  const [artistids, setArtistIds] = useState([]);  
  const [popularity_t, setTrackPopularity] = useState(0);
  const [popularity_a, setArtistPopularity] = useState(0);
  //const [albums, setAlbums] = useState([]);

  const getMyArtists = async () => {
    const res = await fetch('/api/artists');
    const {items} = await res.json();
    setArtists(items);
  };

  const getMyTracks = async () => {
    const res = await fetch('/api/tracks');
    const {items} = await res.json();
    setTracks(items);
  };

  const setIdArrays = () => {
    let t_ids = []
    let a_ids = []
    let t_pop = 0
    let a_pop = 0
    for (let i=0; i<tracks.length; i++){
      //console.log(tracks[i].id)
      t_ids.push(tracks[i].id)
      t_pop += (tracks[i].popularity)/20
    }
    for (let i=0; i<artists.length; i++){
      a_ids.push(artists[i].id)
      a_pop += (artists[i].popularity)/20
    }
    
    setTrackIds(t_ids)
    setTrackPopularity(Math.round(t_pop))
    setArtistIds(a_ids)
    setArtistPopularity(Math.round(a_pop))
  }

  const getAllInfo = async () => {
    getMyArtists();
    getMyTracks();
    setIdArrays();
  }


  //TODO: instead of display top artists, change to 'generate art'
  //once art is generated, figure out somethign for users to see their stats along with the art
  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getAllInfo() }>Show my top stuff</button>
        <div className={homeStyles.container}>

{/* artists */}  
          <div className={homeStyles.column}>
            {artists.length && <h1>artists:</h1>}
            {artists.map((item) => (
            <div key={item.id}>
              <h5>{item.name}</h5>
            </div>
            ))}
          </div>
{/* tracks */}          
          <div className={homeStyles.column}>
            {tracks.length && <h1>tracks:</h1>}
            {tracks.map((item) => (
            <div key={item.id}>
              <h5>{item.name}</h5>
            </div>
            ))}
          </div>

{/* albums */}
          <div className={homeStyles.column}>
            {tracks.length && <h1>albums:</h1>}
            {tracks.map((item) => (
            <div key={item.id}>
              <h5>{item.album.name}</h5>
            </div>
            ))}
          </div>

{/* popularity */}
          <div className={homeStyles.column}>
            {popularity_t>0 && <h1>average song popularity</h1>}
            <p>{popularity_t}%</p>
            {popularity_a>0 && <h1>average artist popularity</h1>}
            <p>{popularity_a}%</p>
          </div>

        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}