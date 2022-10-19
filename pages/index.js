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
//fix backgroun-image width on signin page
//add danceability
//vecteezy attribution <a href="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</a>

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
  <body className={styles.body}>
        <Container  maxWidth={'8xl'}>
        <Button size='sm' onClick={() => signOut()}>Sign out</Button>
      <Stack
        // textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
         {/* px={{ base: 2, md: 5 }} */}
        <Heading
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', md: '8xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color={'white'}>
            AI generated art. <br/>
          </Text>
          <Text as={'span'} color={'white'}>
            Based on your listening. 
          </Text>
        </Heading>
        <Text as={'span'} color={'gray.100'} maxW={'5xl'}>
          [NAME] analyzes your spotify listening history from the past month and uses 
          DALLE-2 to create a masterpiece that is truly unique to your music taste. Blah Blah  listening history from the past month and uses 
          DALLE-2 to create a masterpiece that is truly unique to your music taste. Blah Blah 
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link href = "/art">
            <Button
              rounded={'full'}
              size='lg'
              px={6}
              colorScheme={'purple'}
              bg={'purple.400'}
              _hover={{ bg: 'purple.500' }}>
              Generate Art
            </Button>
          </Link>
          <Link href = "/dashboard">
            <Button rounded={'full'} px={6} size='lg'>
              Dashboard
            </Button>
          </Link>
        </Stack>
        <Flex w={'full'}>
          
        </Flex>
      </Stack>
    </Container>
    </body>

    );
  }
  return (


        <Container maxW={'8xl'} className={styles.body}>
      <Stack
        // textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', md: '8xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color={'white'}>
            AI generated art. <br/>
          </Text>
          <Text as={'span'} color={'white'}>
            Based on your listening. 
          </Text>
        </Heading>
        <Text as={'span'} color={'gray.100'} maxW={'5xl'}>
          [NAME] analyzes your spotify listening history from the past month and uses 
          DALLE-2 to create a masterpiece that is truly unique to your music taste. Blah Blah  listening history from the past month and uses 
          DALLE-2 to create a masterpiece that is truly unique to your music taste. Blah Blah 
        </Text>
        <Stack spacing={6} direction={'row'}>
  
            <Button onClick={() => signIn()} rounded={'full'}
              size='lg'
              px={6}
              bg={'purple.200'}
              _hover={{ bg: 'purple.300' }}>
              <Text color={'purple.900'}>Sign in with Spotify</Text>
            </Button>
         
        </Stack>
        <Flex w={'full'}>
          
        </Flex>
      </Stack>
    </Container>

  );
}

// Signed in as {session?.token?.email} 
//         <Button size='sm' onClick={() => signOut()}>Sign out</Button>
//         <hr />
//         <Stack spacing={4} direction='row' align='center'>
          
//           <Link href = "/dashboard">
//             <Button colorScheme='teal' size='lg'>
//               DASHBOARD
//             </Button>
//           </Link>

//           <Link href = "/art">
//             <Button colorScheme='teal' size='lg'>
//               ART
//             </Button>
//           </Link>

//         </Stack>

// Not signed in <br />
// <button onClick={() => signIn()}>Sign in</button>
// </>