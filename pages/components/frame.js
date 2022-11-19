import {Text, Button } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import React, { useRef, useEffect, useState } from 'react';

//https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
//font fix: https://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time

//need to have canvas element present, BUT not show up until image is loaded...
export function Frame(props){

    const [isVisible, setIsVisible] = useState(false)

    const img_id = Math.floor(Math.random()*10000)
    const canvasRef = useRef(null)
    

    function download(ref){
        const canvas = document.getElementById('canvas');
        const dataURL = canvas.toDataURL();
        console.log(dataURL);
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = dataURL;
        link.click();
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        const image = new Image()
        //image.setAttribute('crossOrigin', 'anonymous');
        const proxy_url = "http://localhost:3000/api/image-proxy?q=" + props.url
        //console.log(proxy_url)

        image.src = proxy_url
        context.clearRect(0, 0, 500, 720);
        context.fillStyle ='#ffffff'
        context.fillRect(0, 0, 500, 720);

        image.onload = () => {
            context.drawImage(image, 0, 0, 500, 500);
            context.font = '50px Special Elite';
            context.fillStyle ='#000000'
            context.fillText(`IMAGE #${img_id}`, 40, 560);
            context.font = '24px Special Elite';
            context.fillText(props.chosen[0]+",", 40, 605);
            context.fillText(props.chosen[1]+",", 40, 635);
            context.fillText("and "+props.chosen[2] +" music", 40, 665);
            context.font = '12px Typewriter';
            context.fillText("create AI generated art based on your music taste at illustrait.us", 100, 700);
            setIsVisible(true)
        };

      }, [])


    return (
        <div className={styles.frame}> 
            {/* purpose of Text is to load font */}
            <Text className={styles.loadFont}>.</Text> 
            <canvas id="canvas" ref={canvasRef} width={500} height={720} style={ isVisible ? {} : { visibility: "hidden" } }/>
            <Button onClick={download} rounded={'full'} px={6} size='lg' m={'5'} className={styles.db}>Download image</Button>
            <image id="theimage"></image>
        </div>
       
    )
  }
