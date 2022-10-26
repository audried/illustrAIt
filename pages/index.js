import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr'
import Dashboard from './dashboard';
import styles from '../styles/Home.module.css';
import { Landing } from './components/home';
import {Login} from './components/login'


export default function Home() {

  const {data: session} = useSession();

  if (session) {
    return (
      <>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
        </head>
      <Landing/>
      </>
    );
  }
  return ( 
    <Login/>
  );
}
