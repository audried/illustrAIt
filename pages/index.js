import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import homeStyles from '../styles/Home.module.css';
import {sortByFrequency} from '../lib/sort';

//TOD0:
  //dont show 0's before 'show my top stuff button is pressed
  //can get danceability, energy and acousticness from track get /audio-features + id
  //remove parentheses
  //takes 2 button clicks to load average song popularity
  //add all genres to set? count # of appearances and can sort low to high


export default function Home() {
  const {data: session} = useSession();
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [trackids, setTrackIds] = useState([]);
  const [genres, setGenres] = useState([]);
  const [popularity_t, setTrackPopularity] = useState(0);
  const [popularity_a, setArtistPopularity] = useState(0);
  //const [albums, setAlbums] = useState([]);
  console.log("page reloaded")


  const getMyArtists = async () => {
    const res = await fetch('/api/artists');
    const {items} = await res.json();
    setArtistData(items)
  };

  const getMyTracks = async () => {
    const res = await fetch('/api/tracks');
    const {items} = await res.json();
    setTrackData(items)
  };

  const setTrackData = (items) => {
    let t_ids = []
    let t_pop = 0

    for (let i=0; i<items.length; i++){
      //console.log(items[i].id)
      t_ids.push(items[i].id);
      t_pop += (items[i].popularity)/20;
    }

    setTracks(items);
    setTrackIds(t_ids)
    setTrackPopularity(Math.round(t_pop))

  }

  const setArtistData = (items) =>{
    let a_pop = 0;
    let g = [];
    for (let i=0; i<items.length; i++){
      a_pop += (items[i].popularity)/20;
      g = [...g, ...items[i].genres]
    }
    setArtists(items);
    setArtistPopularity(Math.round(a_pop))
    setGenres(sortByFrequency(g))
  }

  const getAllInfo = async () => {
    getMyArtists();
    getMyTracks();
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
{/* genres */}
          <div className={homeStyles.column}>
            {genres.length>0 && <h1>genres</h1>}
              {genres.map((item) => (
       
                <h5>{item}</h5>
            
              ))}
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
