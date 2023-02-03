import {signIn} from 'next-auth/react';
import styles from '../styles/Home.module.css';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Drawer,
} from '@chakra-ui/react';
import PhotoSwiper from './swiper'
import Link from 'next/link';
import SpotifyFooter from '../components/spotifyfooter';
import { Share } from 'react-native-web';
// import {useRef, useEffect} from 'react'


export function Login(){

  // async function share(){
  //   if (!('share' in navigator)) {
  //     return
  //   }
  //   const canvas = document.getElementById('canvas')
  //   console.log('s')
  //   canvas.toBlob(async (blob) => {
  //     const files = [new File([blob], 'image.png', { type: blob.type })]
  //         const shareData = {
  //           text: 'Some text',
  //           title: 'Some title',
  //           files,
  //         }
  //         if (navigator.canShare(shareData)) {
  //           try {
  //             await navigator.share(shareData)
  //           } catch (err) {
  //             if (err.name !== 'AbortError') {
  //               console.error(err.name, err.message)
  //             }
  //           }
  //         } else {
  //           console.warn('Sharing not supported', shareData)
  //         }
  //   });
  // }

  // const canvasRef = useRef(null)

  // useEffect(() => {
  //   const context = canvasRef.current.getContext("2d");
  //   context.fillStyle ='#fff234'
  //     context.fillRect(0, 0, 100, 100);
  // },[])

  
    return(
<>
    <Container maxW={'100%'} height={'100%'} className={styles.login}>
      {/* <Flex>
      <canvas id={'canvas'} width={'100px'} height={'100px'} ref={canvasRef}></canvas>
      
      <Button onClick={share}>share</Button>
      </Flex> */}
      <Stack
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
          illustrait analyzes your spotify listening history from the past month to create a masterpiece that is truly unique to your music taste.
          Check out the photos below to see real examples that were created based on users&#39; spotify profiles. You can also view a demo <Link href = "https://drive.google.com/file/d/1_zcSk8e8HA8_sS2fw9I-qIdJGWWElKz3/view?usp=sharing"><u>here</u></Link>
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
        <Flex w={'80%'}>
          <PhotoSwiper></PhotoSwiper>
        </Flex>
      </Stack>
    </Container>
  
    <SpotifyFooter className={styles.bottom}/>
    </>
    )
}
