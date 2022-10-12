import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import styles from '../styles/Dash.module.css';
import Link from 'next/link';
import useSWR from 'swr'

export default function Dashboard() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('/api/userdata', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return(
        <>
        <div className={styles.container}>

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
                <h3>avg artist popularity</h3>
                <h5>{data.artist_pop}</h5>
                <h3>avg song popularity</h3>
                <h5>{data.track_pop}</h5>
            </div>



        </div>
        <button><Link href="/">home</Link></button>
        </>

    );
  }

