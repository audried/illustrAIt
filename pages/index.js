import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import homeStyles from '../styles/Home.module.css';


export default function Home() {
  const {data: session} = useSession();
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);

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
          <div>
            {artists.length && <h1>artists:</h1>}
            {artists.map((item) => (
            <div key={item.id}>
              <h5>{item.name}</h5>
            </div>
            ))}
          </div>
          <div>
            {tracks.length && <h1>tracks:</h1>}
            {tracks.map((item) => (
            <div key={item.id}>
              <h5>{item.name}</h5>
            </div>
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