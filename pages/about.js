import Header  from './components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text, Heading} from '@chakra-ui/react';
import Link from 'next/link';

export default function About() {
    return(
        <Container maxW={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.glass} p='6' rounded='md' ml='5'>
            {/* <Heading>About illustrait:</Heading> */}
            <Text>Illustrait was inspired by Spotify wrapped and my fascination with DALLE</Text>
            <Text>If you care about how it was made, check out the Github Repository: <Link href={'https://github.com/audried/spotify-art'}>https://github.com/audried/spotify-art</Link></Text>
            <Text>add FAQs? </Text>
        </Box>
        </Container>
    )
}