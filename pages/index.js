import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';

import Link from 'next/link';
import useSWR from 'swr'
import Dashboard from './dashboard';

//TOD0:
  //dont show 0's before 'show my top stuff button is pressed
  //can get danceability, energy and acousticness from track get /audio-features + id
  //remove parentheses
  //takes 2 button clicks to load average song popularity
  //add all genres to set? count # of appearances and can sort low to high
 //https://nextjs.org/docs/basic-features/data-fetching/client-side
 //react router page linking: https://stackoverflow.com/questions/63979705/how-to-link-to-another-page-in-react
//maybe save all generated art so people can view a gallery
//could make genres more accurate by fetching more than 20 artists
//cutoff long song titles , if cutoff add ...
//nextauth secret in prod
//add danceability

export default function Home() {
  const {data: session} = useSession();


  // function Art(props){
  //   return <div>{props.data.tracks[0].name}</div>
  // }

  // const getUserData = async () => {
  //   const res = await fetch('/api/userdata');
  //   const {items} = await res.json();
  //   setUserData(items)
  // }


  //TODO: instead of display top artists, change to 'generate art'
  //once art is generated, figure out somethign for users to see their stats along with the art
  if (session) {
    

    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        {/* <button><Link href = "/art">generate art</Link></button> */}
        <button><Link href = "/dashboard">view dashboard</Link></button>
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
