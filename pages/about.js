import Header  from '../components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text, Heading} from '@chakra-ui/react';
import Link from 'next/link';
import SpotifyFooter from '../components/spotifyfooter';


export default function About() {
    return(
        <>
        <Container maxW={'100%'}  height={'100vh'} className={styles.about}>
        <Header></Header>
        <Box className={styles.contactGlass}  p='6' rounded='md' mt={5}>
            {/* <Heading>About illustrait:</Heading> */}
          
            <Heading>FAQs</Heading>
            <br/>
            <Heading size={'md'}>Can I use if I have apple music? </Heading>
            <Text>Currently this site is only for spotify users. If we have enough interest, we will work on adding apple music</Text>
            <br/>

            <Heading size={'md'}>How are the images generated? </Heading>
            <Text>The images are generated with the help of DALLE-2, a cutting edge artificial intelligence system that can generate realistic images based off a description.
                This website chooses a random song from your top 5 songs of the past month, a random album from your top 5 albums of the past month, and your top genre from the past month and uses those to create a prompt to give DALLE. 
                We also add in some fandom filler words (ex. &#39;oil panting&#39;, &#39;dreamscape&#39;, &#39;abstract&#39;, etc.) to give our images more variety. 
                We use the same prompt to generate 2 images so you can choose the one you like the best!
            </Text>
            <br/>

            <Heading size={'md'}>How did you make this?</Heading>
            <Text>If you care about how it was made, check out the Github Repository: <Link href={'https://github.com/audried/spotify-art'}><u>https://github.com/audried/spotify-art</u></Link> for the complete source code. </Text>
            <br/>

            <Heading size={'md'}>I downloaded my picture, but I don&#39;t see it in my photos</Heading>
            <Text>On desktop and mobile, the photo will save to the Downloads folder in your files, under name &#39;my-image.png&#39;. If you&#39;re on an iphone, go to the &#39;Files&#39; app. 
                You can then export the image to your photos. Or you can just take a screenshot if you prefer</Text>
            <br/>

            <Heading size={'md'}>Can DALLE make any image you want?</Heading>
            <Text>Pretty much! If you want to play around with it yourself, make an account <Link href={'https://openai.com/dall-e-2/'}><u>here</u></Link>  </Text>
            <br/>   
        </Box>
        </Container>
        <SpotifyFooter/>
        </>
    )
}