import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Grid, GridItem } from '@chakra-ui/react';
import useSWR from 'swr';
import { Heading } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";


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

            <GridItem pl='2' area={'tracks'}>
                <Box boxShadow='xxl' p='6' rounded='md' bg='white'>

                <Heading size = 'lg'>Top Tracks</Heading>
                {data.tracks.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name.substring(0,50)}</h5>
                    </div>
                ))}
                </Box>
            </GridItem>
            <GridItem pl='2' area={'artists'}>
                <Box boxShadow='xxl' p='6' rounded='md' bg='white'>
                <Heading size='lg'>Top Artists</Heading>
                {data.artists.map((item) => (
                    <div key={item.id}>
                    <h5>{item.name}</h5>
                    </div>
                ))}
                </Box>
            </GridItem>
            <GridItem pl='2' area={'genres'}>
                <Box boxShadow='xxl' p='6' rounded='md' bg='white'>
                <Heading size = 'lg'>Genres</Heading>
                {data.genres.map((item) => (
                    <h5>{item}</h5>

                ))}
                </Box>
            </GridItem>
            
            <GridItem pl='2' area={'apop'}>
                <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                <Heading size = 'lg'>Avg Artist Popularity</Heading>
                <h5>{data.artist_pop}</h5>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'tpop'}>
                <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                <Heading size = 'lg'>Avg Song Popularity</Heading>
                <h5>{data.track_pop}</h5>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'other'}>
                <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                <Heading size='lg'>Other Stats</Heading>
                </Box>
            </GridItem>

        </Grid>

        

    );
  }

