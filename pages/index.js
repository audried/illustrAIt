import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import homeStyles from '../styles/Home.module.css';
import {sortByFrequency} from '../lib/sort';
import Link from 'next/link';

//TOD0:
  //dont show 0's before 'show my top stuff button is pressed
  //can get danceability, energy and acousticness from track get /audio-features + id
  //remove parentheses
  //takes 2 button clicks to load average song popularity
  //add all genres to set? count # of appearances and can sort low to high
 //https://nextjs.org/docs/basic-features/data-fetching/client-side


export default function Home() {
  const {data: session} = useSession();
  const [userdata, setUserData] = useState({});

  const getUserData = async () => {
    const res = await fetch('/api/userdata');
    const {items} = await res.json();
    setUserData(items)
  }



  //TODO: instead of display top artists, change to 'generate art'
  //once art is generated, figure out somethign for users to see their stats along with the art
  if (session) {

    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getUserData() }>Show my top stuff</button>
        <button><Link href="/dashboard">view dashboard</Link></button>

        <div className={homeStyles.container}>
          
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
