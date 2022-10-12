import example from '../public/example.png'
import Link from 'next/link';
import useSWR from 'swr'
import Image from 'next/image'

export default function Art() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('/api/userdata', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return(
        <>
        <Image src={example} width={500 } height={500}></Image>
        <br/>
        <button><Link href="/">home</Link></button>
        </>

    );
  }