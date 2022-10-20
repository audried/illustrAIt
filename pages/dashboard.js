import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import {
    Grid,
    GridItem,
    Text,
    Select,
    Heading,
    Box
  } from '@chakra-ui/react';
import useSWR from 'swr';
import { TrackTable } from './components/table';
import { ArtistTable } from './components/artist_table';
import Link from 'next/link';
import Image from 'next/image'


export default function Dashboard() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('/api/userdata', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return(
        <Grid
        className={styles.grid}
        templateAreas={`"header header header "
                        "tracks artists apop"
                        "tracks artists tpop"
                        "tracks artists other"`}
        gridTemplateRows={'1fr 1fr 1fr 8fr'}
        gridTemplateColumns={'2fr 2fr 2fr'}
        h='200vh'
        w='100%'
        m='auto'
        gap='3'
        color='blackAlpha.700'
        >
            <GridItem pl='2' area={'header'} margin="auto">
                <Link href='/'><Heading size='3xl' color='white'>Your Stats</Heading></Link>
            </GridItem>

            <GridItem pl='2' area={'tracks'}>
                <Box className={styles.glass} p='6' rounded='md' ml='5'>
                    <Heading size = 'sm' mb='5'>Top Tracks
                        {/* could be something todo later */}
                        <Select placeholder='the past month' size='sm' display="inline-block" width="initial" mx='2'>
                            <option value='6months'>the past 6 months</option>
                            <option value='alltime'>all time</option>
                        </Select>
                    </Heading>
                    <hr/>
                    <TrackTable data={data}/>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'artists'}>
                <Box className={styles.glass} p='6' rounded='md' ml='5'>
                    <Heading size = 'sm' mb='5'>Top Artists of
                        {/* could be something todo later */}
                        <Select placeholder='the past month' variant='outline' size='sm' display="inline-block" width="initial" mx='2'>
                            <option value='6months'>the past 6 months</option>
                            <option value='alltime'>all time</option>
                        </Select>
                    </Heading>
                    <hr/>
                    <ArtistTable data={data}></ArtistTable>
                </Box>
            </GridItem>

            {/* <GridItem pl='2' area={'genres'}>
                <Box boxShadow='xxl' p='6' rounded='md' bg='linear-gradient(90deg, rgba(80,3,91,1) 21%, rgba(67,0,77,1) 86%);' ml='5'>
                <Heading size = 'md' color='white'>Top genres</Heading>
                <Text size='sm' color='white'>from the past month</Text>
                {data.genres.map((item) => (
                    <Text color='white'>{item}</Text>

                ))}
                </Box>
            </GridItem> */}
            
            <GridItem pl='2' area={'apop'}>
                <Box className={styles.glass} p='6' rounded='md' mx='5' >
                <Heading size = 'sm' mb='5' >Top Genres</Heading>
                    <Image src='/../public/piechart.png' width={320} height={320}></Image>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'tpop'}>
                <Box className={styles.glass} p='6' rounded='md' mx='5' >
                <Heading size = 'sm' mb='5' >Audio Features</Heading>
                    <Image src='/../public/radarchart.png' width={320} height={320}></Image>
                </Box>
            </GridItem>

             {/*<GridItem pl='2' area={'tpop'}>
                <Box boxShadow='xl' p='6' rounded='md' bg='rgba(173, 6, 185, 0.9)' mx='5'>
                <Heading size = 'lg'>Avg Song Popularity</Heading>
                <h5>{data.track_pop}</h5>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'other'}>
                <Box boxShadow='xl' p='6' rounded='md' bg='rgba(173, 6, 185, 0.9)' mx='5'>
                <Heading size='lg'>Other Stats</Heading>
                </Box>
            </GridItem> */}

        </Grid>


    );
  }

//   bg='linear-gradient(90deg, rgba(167,25,189,1) 13%, rgba(106,6,120,1) 81%);'
//'linear-gradient(90deg, rgba(106,6,120,1) 15%, rgba(80,3,91,1) 86%);'
//linear-gradient(90deg, rgba(80,3,91,1) 21%, rgba(67,0,77,1) 86%);