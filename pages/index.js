import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';



export default function Home() {
  const {data: session} = useSession();
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setPlaylists(items);
  };

  const getMyArtists = async () => {
    const res = await fetch('/api/artists');
    const {items} = await res.json();
    setArtists(items);
  };

  //TODO: instead of display top artists, change to 'generate art'
  //once art is generated, figure out somethign for users to see their stats along with the art
  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyArtists()}>Show my top stuff</button>
        <div>
          {artists.length && <h1>artists:</h1>}
          {artists.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
          </div>
          ))}
        </div>
        {/* <div>
          {artists.length && <h1>artists:</h1>}
          {artists.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
          </div>
          ))}
        </div> */}
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