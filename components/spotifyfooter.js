import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import styles from '../styles/Home.module.css';
  import Image from 'next/image';

  const Logo = () => {
    return (
      <Image src = '/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png' height={54.5} width={181.7}/>
    );
  };
  


  export default function SpotifyFooter() {
    return (
      <Box
        className={styles.footerglass}>
        <Container
           as={Stack}
           maxW={'6xl'}
           py={4}
           direction={'column'}
           spacing={4}
           justify={{ base: 'center', md: 'space-between' }}
           align={{ base: 'center', md: 'center' }}>
          <Link href='https://open.spotify.com'><Logo /></Link>
           <Stack direction={'row'} spacing={6}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/privacy'}>Privacy Policy</Link>
          </Stack>
          
          
        </Container>
  
      </Box>
    );
  }