import {useSession, signIn, signOut} from 'next-auth/react';
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image'

import { Frame } from './frame';


export function Landing(){

    const [urls, setUrls] = useState([])
    const [query, setQuery] = useState("")
    const [caption, setCaption] = useState("")
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
 
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('../api/prompt', fetcher)
    if (error) return <div>failed to load</div>

    if (!data) {
        return <div>loading...</div>
    }else if (query == ""){
        setQuery(data[0])
        setCaption(data[1])
    }

    function getDalle2() {

        
const p = ["https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-ZaCEjvvOEbjA6FQsgZRTKZQM/image.webp?st=2022-10-24T17%3A56%3A45Z&se=2022-10-24T19%3A54%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-24T15%3A58%3A12Z&ske=2022-10-31T15%3A58%3A12Z&sks=b&skv=2021-08-06&sig=71Mpu4TjXURzBFVw%2BoFap0oFzc3oQszQljgmmgM/pYw%3D",
"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-kyzk1htv7iwZ3pkREPbHv2PB/image.webp?st=2022-10-24T17%3A56%3A45Z&se=2022-10-24T19%3A54%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-24T15%3A58%3A12Z&ske=2022-10-31T15%3A58%3A12Z&sks=b&skv=2021-08-06&sig=ZizgHBFPloZsPq30sKJKZTw2/LpTgJRW9pizFJ1Y4v0%3D",
"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-wmCn8raiI1AfHWTDZpaKBrmm/image.webp?st=2022-10-24T17%3A56%3A45Z&se=2022-10-24T19%3A54%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-24T15%3A58%3A12Z&ske=2022-10-31T15%3A58%3A12Z&sks=b&skv=2021-08-06&sig=69mYh%2Bp1SM4C07BaFWLECoZqqEjEHTKor2p24Z4bnfo%3D",
"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-UDIStnnzwHrbolu7M0P2i9JG/image.webp?st=2022-10-24T17%3A56%3A45Z&se=2022-10-24T19%3A54%3A45Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-24T15%3A58%3A12Z&ske=2022-10-31T15%3A58%3A12Z&sks=b&skv=2021-08-06&sig=eYdH4Zefyjt9KG9kyYcqIU6rB66rkU84873ksncq/g4%3D"]

        console.log(query)
        setVisible(true)
        //setUrls(p)
        //setError(false);
        setLoading(true);

        fetch(`/api/dalle2?q=${query}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.result.data)
            let temp = data.result.data.map(item =>{return item.generation.image_path})
            console.log("urls",temp)
            setUrls(temp)
            setVisible(true)
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            // setError(true);
          });
       
      }
    return(
        <body className={styles.body}>
        <Container  maxWidth={'8xl'}>
        <Button size='sm' onClick={() => signOut()}>Sign out</Button>
        <Stack
            // textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            width='100%'>
            {/* px={{ base: 2, md: 5 }} */}
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
            
                <Button
                    onClick={getDalle2}
                    rounded={'full'}
                    size='lg'
                    px={6}
                    colorScheme={'purple'}
                    bg={'purple.400'}
                    _hover={{ bg: 'purple.500' }}>
                    Generate Art
                </Button>

                <Link href = "/dashboard">
                    <Button rounded={'full'} px={6} size='lg'> Dashboard</Button>
                </Link>
            
            </Stack>

            <Flex className={styles.imageContainer} w={'full'}>
                {loading && <div>loading...</div>}
                {visible &&
                    urls.map(url =>(
                        <Frame url={url} caption={caption}/>
                    ))
                }
            </Flex>
            {visible && <Text color='white'>{caption}</Text>}
        </Stack>
        </Container>
    </body>
    )
}