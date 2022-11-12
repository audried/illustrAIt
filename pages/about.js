import Header  from './components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text, Heading} from '@chakra-ui/react';
import Link from 'next/link';

export default function About() {
    return(
        <Container maxW={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.glass} p='6' rounded='md' ml='5'>
            <Heading>About illustrait:</Heading>
            <Text>heyy</Text>
            <Link href={'https://github.com/audried/spotify-art'}>Github</Link>
        </Box>
        </Container>
    )
}