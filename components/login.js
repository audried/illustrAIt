import {signIn} from 'next-auth/react';
import styles from '../styles/Home.module.css';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import PhotoSwiper from './swiper'
import { Link } from '@chakra-ui/react';


export function Login(){
    return(

    <Container maxW={'100%'} className={styles.login}>
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
          Check out the photos below to see real examples that were created based on users&#39; spotify profiles. You can view a demo <Link href = "https://drive.google.com/file/d/1azRLGX-SkSVj5O6uI-O7sjR9ZP0zTjAQ/view?usp=sharing" className={styles.link}>here</Link>
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

    )
}
