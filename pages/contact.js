import Header  from './components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text} from '@chakra-ui/react';

export default function Contact() {
    return(
        <Container maxW={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.glass} p='6' rounded='md' ml='5'>
            <Text>heyy</Text>
            <Text>Create an issue on <Link href={'https://github.com/audried/spotify-art'}>Github</Link></Text>
            <Text>Have questions? reach out to audreydockendorf1@gmail.com</Text>

        </Box>
        </Container>
    )
}