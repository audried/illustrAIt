import {useSession} from 'next-auth/react';
import { Landing } from '../components/home';
import {Login} from '../components/login'


export default function Home() {

  const {data: session} = useSession();

  if (session) {
    return (   
      <Landing/>
    );
  }
  return ( 
    <Login/>
  );
}
