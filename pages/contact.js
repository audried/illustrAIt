import Header  from './components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text} from '@chakra-ui/react';

export default function Contact() {
    return(
        <Container maxW={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.glass} p='6' rounded='md' ml='5'>
            <Text>heyy</Text>
        </Box>
        </Container>
    )
}