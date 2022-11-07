import {useSession, signIn, signOut} from 'next-auth/react';
import styles from '../../styles/Home.module.css';
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
import Dashboard from '../dashboard';
import SimpleSlider from './slider'


export function Login(){
    return(

    <Container maxW={'8xl'} className={styles.login}>
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
          <SimpleSlider></SimpleSlider>
        </Flex>
      </Stack>
    </Container>

    )
}