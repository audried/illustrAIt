import {useSession, signIn, signOut} from 'next-auth/react';
import styles from '../../styles/Home.module.css';
import {useState} from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image'


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
        console.log(query)
        setVisible(true)
        // setError(false);
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
            py={{ base: 20, md: 28 }}>
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
            <Flex w={'full'}>
                {loading && <div>loading...</div>}
                {visible &&
                    urls.map(url =>(<Image src={url} key={url} height={500} width={500}></Image>))
                }
            </Flex>
            {visible && <Text color='white'>{caption}</Text>}
        </Stack>
        </Container>
    </body>
    )
}