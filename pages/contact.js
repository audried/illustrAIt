import Header  from './components/header';
import styles from '../styles/Home.module.css';
import { Container, Box, Text} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Contact() {
    return(
        <Container maxW={'100%'} className={styles.about}>
        <Header></Header>
        <Box className={styles.contactGlass} p='6' rounded='md' mt={5}>
            <Text>This site was built by Audrey Dockendorf and Justin Schmitt</Text>
            <Text>If there are any features you want to see in the future, or bugs that need fixing, create an issue on our <Link href='https://github.com/audried/spotify-art' isExternal>Github repository</Link></Text>
            <Text>Have questions? reach out to audreydockendorf1@gmail.com with subject line 'Illustrait'</Text>

        </Box>
        </Container>
    )
}