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

  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyArtists()}>Show my top stuff</button>
        {artists.length && <h1>Your top artists:</h1>}
        {artists.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
            {/* <p>{item.album.name}</p> */}
            {/* <img src={item.images[0]?.url} width="100" /> */}
          </div>
        ))}
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