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
    }else if (query == ""){
        setQuery(data[0])
        setCaption(data[1])
        setChosen(data.slice(2))
    }

    function getDalle2() {
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
          .then((res) => res.json())
          .then((data) => {
            setUrls(data)
            setVisible(true)
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            // setError(true);
          });
       
      }


      function buttonClick(){
        const p = ["https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-6SV0NFAaBGHjKL6uLdL5yvYo/image.webp?st=2022-10-25T18%3A39%3A43Z&se=2022-10-25T20%3A37%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-25T18%3A00%3A23Z&ske=2022-11-01T18%3A00%3A23Z&sks=b&skv=2021-08-06&sig=5m8SdI3Ks56y/9JJDSVoj%2BeS6DMF8vuty0VPbmt7Y8g%3D",
       
        "https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-mg6BvWd8eNIck37XQGwPyI9B/image.webp?st=2022-10-25T18%3A39%3A43Z&se=2022-10-25T20%3A37%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-25T18%3A00%3A23Z&ske=2022-11-01T18%3A00%3A23Z&sks=b&skv=2021-08-06&sig=ToW%2BlJSu/ZFWr%2Bc6cXnOdAsATAr4ZjY88M35hTj1flQ%3D",
     
        "https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-BAUL74ZHDoGNqcsrbP81bR4J/image.webp?st=2022-10-25T18%3A39%3A43Z&se=2022-10-25T20%3A37%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-25T18%3A00%3A23Z&ske=2022-11-01T18%3A00%3A23Z&sks=b&skv=2021-08-06&sig=/lvQZey1e6ojPy7mVIklINB0r7iVOo7XvkTqVkwsuLM%3D",
     
        "https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-HcxbHAHmlSh2EjisUKJTxuTv/image.webp?st=2022-10-25T18%3A39%3A43Z&se=2022-10-25T20%3A37%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-25T18%3A00%3A23Z&ske=2022-11-01T18%3A00%3A23Z&sks=b&skv=2021-08-06&sig=iyfxsnqO%2BTGGluSy2Wntrfc40bELmHljNjrUsk05ZME%3D"]
        
       
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

        </Stack>
        </Container>
    </body>
    )
}