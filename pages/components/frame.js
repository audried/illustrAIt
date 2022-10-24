import { Heading, Text } from '@chakra-ui/react';
  import Image from 'next/image';
  import styles from '../../styles/Home.module.css';


  export function Frame(props){

    return (
        <div className={styles.frame}>
            <Image src={props.url} height={500} width={500} className="art"></Image>
            <Heading className={styles.user} size='lg'>@audreydock on spotify,</Heading>
            <Heading className={styles.user} size='md'>{props.caption}</Heading>

        </div>
    )
  }


