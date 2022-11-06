import { Heading, Text, Button } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import {canvas} from 'canvas';
import React, { useRef, useEffect } from 'react';
import white from '../../public/white.png';
//import canvas2image from "canvas2image-2";

//https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image

export function Frame(props){

    const img_id = Math.floor(Math.random()*10000)
    const canvasRef = useRef(null)

    function download(ref){
        const canvas = document.getElementById('canvas');
        const dataURL = canvas.toDataURL();
        console.log(dataURL);
    };

    function to_image(){
        var canvas = document.getElementById("canvas");
        document.getElementById("theimage").src = canvas.toDataURL();
        Canvas2Image.saveAsPNG(canvas);
    }

    function dl(){
        var canvasObj = document.getElementById("canvas");
        canvas2image.convertToPNG(canvasObj, 500, 720);
    }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.font = '50px Special Elite';
        
        const image = new Image()
        //image.setAttribute('crossOrigin', 'anonymous');
        image.src = props.url
        context.clearRect(0, 0, 500, 720);
        context.fillStyle ='#ffffff'
        context.fillRect(0, 0, 500, 720);

        image.onload = () => {
            console.log("here")

            context.drawImage(image, 0, 0, 500, 500);
            context.font = '50px Special Elite';
            context.fillStyle ='#000000'
            context.fillText(`IMAGE #${img_id}`, 40, 560);
            // context.font = '20px Typewriter';
            //context.fillText("@audreydock on spotify,", 40, 570);
            context.font = '24px Special Elite';
            context.fillText(props.chosen[0]+",", 40, 605);
            context.fillText(props.chosen[1]+",", 40, 635);
            context.fillText("and "+props.chosen[2] +" music", 40, 665);
            context.font = '12px Typewriter';
            context.fillText("create AI generated art based on your music taste at artify.com", 100, 700);

        };


      }, [])


    return (
        <div className={styles.frame}> 
            <canvas id="canvas" ref={canvasRef} width={500} height={720}/>
            <Button>download</Button>
            <image id="theimage"></image>
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
