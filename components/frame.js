
import {Text, Button } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import {cutOff} from '../lib/cutoff'
import React, { useRef, useEffect, useState } from 'react';

//https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
//font fix: https://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time

//need to have canvas element present, BUT not show up until image is loaded...
export function Frame(props){

    const [isVisible, setIsVisible] = useState(false)
    const [url, setUrl] = useState('')
    const img_id = Math.floor(Math.random()*10000)
    const canvasRef = useRef(null)
    

    function download(ref){
        const canvas = document.getElementById(`canvas${url}`);
        const dataURL = canvas.toDataURL();
        console.log(dataURL);
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = dataURL;
        link.click();
        
    };

    //  handleSharing = async () => {
    //     const canvas = document.getElementById('canvas');
    //     const dataUrl = canvas.toDataURL();
    //     const shareDetails = {dataUrl}

    //     if (navigator.canShare) {
    //       try {
    //         await navigator
    //           .share(shareDetails)
    //           .then(() =>
    //             console.log("Hooray! Your content was shared to tha world")
    //           );
    //       } catch (error) {
    //         console.log(`Oops! I couldn't share to the world because: ${error}`);
    //       }
    //     } else {
    //       // fallback code
    //       console.log(
    //         "Web share is currently not supported on this browser. Please provide a callback"
    //       );
    //     }
    // };

    async function shareCanvas() {
        const canvasElement = document.getElementById(`canvas${url}`);
        const dataUrl = canvasElement.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray = [
          new File(
            [blob],
            'my-image.jpeg',
            {
              type: blob.type,
              lastModified: new Date().getTime()
            }
          )
        ];
        const shareData = {
          files: filesArray,
        };
        console.log(shareData)
        navigator.share(dataUrl);
      }

      function share(){
        const canvas = document.getElementById(`canvas${url}`);
        var img = canvas.toDataURL("image/jpg")
        document.createElement(
            `<img src=${url}/>`
        );
      }

      async function shareImage() {
        console.log("hellop")
        const response = await fetch('nacho.jpg');
        const blob = await response.blob();
        const filesArray = [
          new File(
            [blob],
            'meme.jpg',
            {
              type: "image/jpeg",
              lastModified: new Date().getTime()
            }
         )
        ];
        const shareData = {
          files: filesArray,
        };
        navigator.share(shareData);
      }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        const image = new Image()
        const canvas = document.getElementById(`canvas${url}`);
        const height = canvas.height
        const width = canvas.width
        image.setAttribute('crossOrigin', 'anonymous');
        console.log(process.env.NEXT_PUBLIC_API_URL)
        const proxy_url = process.env.NEXT_PUBLIC_API_URL + "/api/image-proxy?q=" + props.url
        console.log("PROXY:",proxy_url)
        setUrl(proxy_url)
        image.src = proxy_url
        context.clearRect(0, 0, width, height);
        context.fillStyle ='#ffffff'
        context.fillRect(0, 0, width, height);

        const logo = new Image()
        logo.setAttribute('crossOrigin', 'anonymous');
        logo.src = '/spotify-icons-logos/icons/01_RGB/02_PNG/smallicon.png'
        logo.width=50
        logo.height=50

        //cut off long titles at 25 characters
        var chosensong = cutOff(props.chosen[0], 29)
        var chosenalbum = cutOff(props.chosen[1], 29)
        console.log(chosensong)

        image.onload = () => {
            // logo.onload = () => {
            context.textAlign = 'left'
            context.drawImage(image, 0, 0, width, width);
            
            context.font = width==500 ? '50px Special Elite' : '40px Special Elite'
            context.fillStyle ='#000000'
            context.fillText(`IMAGE #${img_id}`, .08*width, .78*height);
            width == 500 ? context.font = '24px Special Elite' : context.font = '18px Special Elite'
            context.fillText(chosensong+",", .08*width, .84*height);
            context.fillText(chosenalbum+",", .08*width, .88*height);
            context.fillText("and "+props.chosen[2] +" music", .08*width, .92*height);
            context.font = width==500 ? '12px Times New Roman' : '10px Times New Roman'
            context.textAlign = 'center'
            context.fillText("create AI art at illustrait.co", width/2, .98*height);
            // context.imageSmoothingEnabled = false;
            context.drawImage(logo, .85*width, .9*height, .1*width, .1*width);
            
            setIsVisible(true)
            //  }
        };
        //logo.naturalWidth*.05

        // logo.onload = () => {
        //     context.drawImage(logo, .9*width, .9*height, width, height);
        // }

      }, [])


    return (
        <div className={styles.frame}> 
            {/* purpose of Text is to load font */}
            <Text className={styles.loadFont}>.</Text> 
            <canvas id={`canvas${url}`} ref={canvasRef} width={window.innerWidth >= 550 ? 500 : .9*window.innerWidth} height={window.innerWidth >= 550 ? 720 : 1.296*window.innerWidth} style={ isVisible ? {} : { visibility: "hidden" } }/>
            <Button onClick={download} rounded={'full'} px={6} size='lg' mt={'5'} className={styles.db}>Download</Button>
            {/* <Button onClick={share} rounded={'full'} px={6} size='lg' m={'5'} className={styles.db}>Share</Button> */}
            <image id="theimage"></image>
        </div>
       
    )
  }
