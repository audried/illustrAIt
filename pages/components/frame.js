import { Heading, Text } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import {canvas} from 'canvas';
import React, { useRef, useEffect } from 'react'


  export function Frame(props){

    const canvasRef = useRef(null)

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.font = '48px serif';
        

        const bg = new Image()
        bg.src='https://www.mactrast.com/wp-content/uploads/2018/02/188038.png'
        bg.onload = () => {
            console.log("second")
            context.drawImage(bg, 0, 0, 500, 700);
        };
        const image = new Image()
        image.src = props.url
        image.onload = () => {
            console.log("here")
            context.drawImage(image, 0, 0, 500, 500);
            context.fillText('Hello world', 40, 560);
        };
        

      }, [])


    return (
        <div className={styles.frame}> 
            <canvas ref={canvasRef} width={500} height={700}/>
        </div>
       
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
