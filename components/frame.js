
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
    

    function isMobileTablet(){
        var check = false;
        (function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
                check = true;
        })(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function download(ref){
        const canvas = document.getElementById(`canvas${url}`);
        if (isMobileTablet){
            //console.log("phone")
            if (!('share' in navigator)) {
                return
            }
            canvas.toBlob(async (blob) => {
                const files = [new File([blob], 'image.png', { type: blob.type })]
                    const shareData = {
                      text: 'Some text',
                      title: 'Some title',
                      files,
                    }
                    if (navigator.canShare(shareData)) {
                      try {
                        await navigator.share(shareData)
                      } catch (err) {
                        if (err.name !== 'AbortError') {
                          console.error(err.name, err.message)
                        }
                      }
                    } else {
                      console.warn('Sharing not supported', shareData)
                    }
              });

        }else{
            const dataURL = canvas.toDataURL();
            //console.log(dataURL);
             var link = document.createElement('a');
             link.download = "my-image.png";
             link.href = dataURL;
             link.click();
        }
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        const image = new Image()
        const canvas = document.getElementById(`canvas${url}`);
        const height = canvas.height
        const width = canvas.width
        image.setAttribute('crossOrigin', 'anonymous');
        //console.log(process.env.NEXT_PUBLIC_API_URL)
        const proxy_url = process.env.NEXT_PUBLIC_API_URL + "/api/image-proxy?q=" + props.url
        //console.log("PROXY:",proxy_url)
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
        var chosensong = props.chosen[0]
        var chosenalbum = props.chosen[1]
        var topgenre = props.chosen[2]
        if (topgenre.length <15){
            topgenre = topgenre + ' music'
        }
        //console.log(chosensong)

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
            context.fillText("and "+topgenre, .08*width, .92*height);
            context.font = width==500 ? '12px Times New Roman' : '10px Times New Roman'
            context.textAlign = 'center'
            context.fillText("AI art based on your music @ illustrait.co", width/2, .98*height);
            // context.imageSmoothingEnabled = false;
            context.drawImage(logo, .85*width, .9*height, .1*width, .1*width);
            
            setIsVisible(true)
            //  }
        };
        //logo.naturalWidth*.05

        // logo.onload = () => {
        //     context.drawImage(logo, .9*width, .9*height, width, height);
        // }

      }, [img_id, props.chosen, props.url, url])


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
