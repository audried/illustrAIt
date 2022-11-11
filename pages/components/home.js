import {useSession, signIn, signOut} from 'next-auth/react';
import { Venmo } from './venmo'
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image';
import { Frame } from './frame';




export function Landing(){

    const [urls, setUrls] = useState([])
    const [chosen, setChosen] = useState()
    const [query, setQuery] = useState("")
    const [caption, setCaption] = useState("")
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
 
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('../api/prompt', fetcher)
    if (error) return <div>failed to load</div>
    console.log("data",data)

    if (!data) {
        return <div>loading...</div>
    }else if (query == "" && !data.image_urls){
        setQuery(data[0])
        setCaption(data[1])
        setChosen(data.slice(2))
    }

    if (data && data.image_urls && urls.length == 0) {
        console.log("in")
        setUrls(data.image_urls)
        setVisible(true)
    }

    async function getDalle2() {
        setVisible(false)
        setQuery(data[0])
        setCaption(data[1])
        setChosen(data.slice(2))
        console.log(query)
        
        //setError(false);
        setLoading(true);

        fetch(`/api/dalle2?q=${query}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (res) => {
            const data = await res.json()
            console.log(data)
            if (res.status == 200) {
                setUrls(data)
                setVisible(true)
                setLoading(false);
            } else {
                console.log(data)
                setLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            // setError(true);
          });
       
      }

    async function validatePayment(order_id){
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + Buffer.from(client_id + ":" + client_secret).toString('base64'));
        headers.set('Content-Type', "application/x-www-form-urlencoded")

        const token = await fetch("http://localhost:3000/api/payment-verify", {
            method: 'POST',
            headers: headers,
            body: 'grant_type=client_credentials'
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // Log the API data
            console.log('token', data);
                return data.access_token
        })
    }

      function buttonClick(){
        const p = ["https://oaidalleapiprodscus.blob.core.windows.net/private/org-EqtOqYOQ3gfM2v1xrwx4NjUA/user-bJIqmx887APGHewBpZ3qUiQU/img-pq8NfLZ4hMLBK1j6ez2D5cV8.png?st=2022-11-06T03:16:50Z",
       
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-EqtOqYOQ3gfM2v1xrwx4NjUA/user-bJIqmx887APGHewBpZ3qUiQU/img-pq8NfLZ4hMLBK1j6ez2D5cV8.png?st=2022-11-06T03:16:50Z",
     
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-EqtOqYOQ3gfM2v1xrwx4NjUA/user-bJIqmx887APGHewBpZ3qUiQU/img-pq8NfLZ4hMLBK1j6ez2D5cV8.png?st=2022-11-06T03:16:50Z",
     
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-EqtOqYOQ3gfM2v1xrwx4NjUA/user-bJIqmx887APGHewBpZ3qUiQU/img-pq8NfLZ4hMLBK1j6ez2D5cV8.png?st=2022-11-06T03:16:50Z"]
        
       
        setVisible(true)
        setUrls(p)
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
                Artify analyzes your spotify listening history from the past month and uses 
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
                        <Frame url={url} caption={caption} chosen={chosen}/>
                        
                    ))
                }
            </Flex>
            {visible && <Venmo validatePayment={validatePayment}/>}
        </Stack>
        </Container>
    </body>
    )
}
