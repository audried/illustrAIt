import {Container, Heading} from '@chakra-ui/react';
import styles from '../styles/Dash.module.css';
import SpotifyFooter from '../components/spotifyfooter';
export default function Custom500() {
    return (
        <>
        <Container maxW={'100%'} height={'100vh'} className={styles.dash}>
            <Heading> 404: page not found</Heading>
        </Container>
        <SpotifyFooter/>
        </>
        
    )
    
}