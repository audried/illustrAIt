import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import styles from '../styles/Dash.module.css';
import {
    Grid,
    GridItem,
    Text,
    Select,
    Heading,
    Box,
    Button,
    Container,
    Flex
  } from '@chakra-ui/react';
import useSWR from 'swr';
import { TrackTable } from '../components/table';
import { ArtistTable } from '../components/artist_table';
import Link from 'next/link';
import Image from 'next/image'
import { getAudioFeatures } from '../lib/spotify';
import { RadarChart } from '../components/radar'
import { PieChart } from '../components/pie'
import Header  from '../components/header';
import { Loading } from '../components/loading'
import SpotifyFooter from '../components/spotifyfooter';

export default function Dashboard() {

    const [time_range, setTimeRange] = useState("short_term");
    const time_range_map = {'short_term':' the past month', 'medium_term':' the past 6 months', 'long_term':' all time'}


    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR(`/api/userdata?time_range=${time_range}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return( 
        <Container maxW={'100%'} className={styles.grid}>
            <Header></Header>
            <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
                <Loading />
            </Flex>
        </Container>)


    
    return(
    <>
        <Container maxW={'100%'} height={'100%'} className={styles.dash}>
                <Header></Header>
           
                <Box className={styles.glass} p='6' rounded='md'  my='5' maxW={'850px'} mx={'auto'}>
                    <Heading size = 'sm' mb='5'>Top Tracks of
                        <Select onChange={(e) => {setTimeRange(e.target.value)}} placeholder={time_range_map[time_range]} variant='outline' size='sm' display="inline-block" width="initial" mx='2'>
                            <option value='short_term'>the past month</option>
                            <option value='medium_term'>the past 6 months</option>
                            <option value='long_term'>all time</option>
                        </Select>
                    </Heading>
                    <hr/>
                    <TrackTable data={data}/>
                </Box>
       
                <Box className={styles.glass} p='6' rounded='md' mb='5' maxW={'850px'} mx={'auto'}>
                    <Heading size = 'sm' mb='5'>Top Artists of
                        <Select onChange={(e) => {setTimeRange(e.target.value)}} placeholder={time_range_map[time_range]} variant='outline' size='sm' display="inline-block" width="initial" mx='2'>
                            <option value='short_term'>the past month</option>
                            <option value='medium_term'>the past 6 months</option>
                            <option value='long_term'>all time</option>
                        </Select>
                    </Heading>
                    <hr/>
                    <ArtistTable data={data}></ArtistTable>
                </Box>

                <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'} className={styles.flex} maxW={'850px'} mx={'auto'} mb={'10px'}>
    
                    <Box className={styles.flexglass} p='6' rounded='md' width={{md:'49%'}}>
                    <Heading size = 'sm' mb='5' >Audio Features</Heading>
                        <RadarChart data={data.audio_features} labels={data.feature_labels}/>
                    </Box>
        
                    <Box className={styles.flexglass} p='6' rounded='md' mt={{ base: '5', md: '0' }} width={{md:'49%'}}>
                    <Heading size = 'sm'  >Top Genres</Heading>
                    <Text className={styles.subhead} color='gray' mb='5' >
                        Click on a section to display label
                    </Text>
                        <PieChart data={data.piedata} labels={data.pielabels}></PieChart>
                    </Box>
                </Flex>
         
    </Container>
    
    <SpotifyFooter login={false}/>
    </>
    );
  }
