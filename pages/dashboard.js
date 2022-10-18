import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import styles from '../styles/Dash.module.css';
import Link from 'next/link';
import { Grid, GridItem } from '@chakra-ui/react';
import useSWR from 'swr';
import { Heading } from '@chakra-ui/react';


export default function Dashboard() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('/api/userdata', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return(
        <Grid
        templateAreas={`"header header header header"
                        "tracks artists genres apop"
                        "tracks artists genres tpop"
                        "tracks artists genres other"`}
        gridTemplateRows={'1fr 1fr 1fr 8fr'}
        gridTemplateColumns={'2fr 2fr 2fr 2fr'}
        h='100vh'
        w='90%'
        m='auto'
        gap='3'
        color='blackAlpha.700'
        >
            <GridItem pl='2' area={'header'} margin="auto">
                <Heading size='3xl'>Dashboard</Heading>
            </GridItem>
            <GridItem pl='2' bg='pink.100' area={'tracks'}>
                <Heading size = 'lg'>Top Tracks</Heading>
                {data.tracks.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name.substring(0,50)}</h5>
                    </div>
                ))}
            </GridItem>
            <GridItem pl='2' bg='red.100' area={'artists'}>
                <Heading size='lg'>Top Artists</Heading>
                {data.artists.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name}</h5>
                    </div>
                ))}
            </GridItem>
            <GridItem pl='2' bg='orange.100' area={'genres'}>
                <Heading size = 'lg'>Genres</Heading>
                {data.genres.map((item) => (
                    <h5>{item}</h5>

                ))}
            </GridItem>

            <GridItem pl='2' bg='yellow.100' area={'apop'}>
                <Heading size = 'lg'>Avg Artist Popularity</Heading>
                <h5>{data.artist_pop}</h5>
            </GridItem>

            <GridItem pl='2' bg='yellow.100' area={'tpop'}>
                <Heading size = 'lg'>Avg Song Popularity</Heading>
                <h5>{data.track_pop}</h5>
            </GridItem>

            <GridItem pl='2' bg='yellow.100' area={'other'}>
                <Heading size='lg'>Other Stats</Heading>
                
            </GridItem>

            {/* <div className={styles.container}>

            <div className={styles.colummn}>
                <h3>top tracks</h3>
                {data.tracks.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name.substring(0,50)}</h5>
                    </div>
                ))}
            </div>

            <div className={styles.colummn}>
                <h3>top artists</h3>
                {data.artists.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name}</h5>
                    </div>
                ))}
            </div>

            <div className={styles.colummn}>
                <h3>top genres</h3>
                {data.genres.map((item) => (
                    <h5>{item}</h5>

                ))}
            </div>

            <div className={styles.colummn}>
                <h3>albums</h3>
                {data.tracks.map((item) => (
                    <div key={item.id}>
                    <h5>{item.album}</h5>
                    </div>
                ))}
            </div>

            <div className={styles.colummn}>
                <h3>avg artist popularity</h3>
                <h5>{data.artist_pop}</h5>
                <h3>avg song popularity</h3>
                <h5>{data.track_pop}</h5>
            </div>



            </div>
            <button><Link href="/">home</Link></button> */}

        </Grid>

        

    );
  }

