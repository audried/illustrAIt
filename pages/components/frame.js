import { Heading, Text } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import {canvas} from 'canvas';
import React, { useRef, useEffect } from 'react'


  export function Frame(props){

    const canvasRef = useRef(null)

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        const image = new Image()
        image.src = props.url
        image.onload = () => {
            console.log("here")
            context.drawImage(image, 0, 0, 500, 500);
          };
      }, [])


    return (
        <canvas ref={canvasRef} width={500} height={500}/>
    )
  }

        // {/* <div className={styles.frame}>
        //     <Image src={props.url} height={500} width={500} className="art"></Image>
            
        //     <div className={styles.textContainer}>
        //         <Heading className={styles.user} size='lg'>ARTIFY #234 by @audreydock</Heading>
        //         <Heading size='md' className={styles.user}>{props.chosen[0]}</Heading>
        //         <Heading size='md' className={styles.user}>{props.chosen[1]}</Heading>
        //         <Heading size='md' className={styles.user}>{props.chosen[2]} music</Heading>
        //     </div>
        // </div> */}
