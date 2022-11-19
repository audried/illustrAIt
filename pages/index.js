import {useSession} from 'next-auth/react';
import { Landing } from './components/home';
import {Login} from './components/login'
import Head from 'next/head';

export default function Home() {

  const {data: session} = useSession();

  if (session) {
    return (
      <>
      <Head>
        <link rel="shortcut icon" href="/fav.png" />
        <link rel="icon" type="image/png" sizes="30x30" href="/fav.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
        </Head>
      <Landing/>
      </>
    );
  }
  return ( 
    <Login/>
  );
}
