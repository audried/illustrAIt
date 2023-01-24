import Header  from '../components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text} from '@chakra-ui/react';
import { Link , Heading} from '@chakra-ui/react';
import SpotifyFooter from '../components/spotifyfooter';

export default function Privacy() {
    return(
        <>
        <Container maxW={'100%'} height={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.contactGlass} p='6' rounded='md' mt={5}>
            <Heading>Privacy Policy</Heading>
            <br/>
            <Text>Illustrait uses the Spotify Web API to get data about your Spotify profile. By using this site, you agree to the use of your account email and information about your top listened-to artists and tracks as stated by this policy.

        </Text>
            <Text>None of your spotify listening data is stored or shared with any third parties. <br/>
                The email associated with your spotify account is stored until 11:59 PM EST on the day you generate an image to prevent multiple uses in one day. Your email will never be shared with any third parties.</Text>
            <Text>If at any point you would like to revoke Illustrait&#39;s permissions, you can do so by following the guide <Link href='https://support.spotify.com/us/article/spotify-on-other-apps/'><u>here</u></Link></Text>
            <Text>Feel free to <Link href='/contact'><u>contact us</u></Link> with any questions</Text>
        </Box>
        </Container>
        <SpotifyFooter />
        </>
    )
}
