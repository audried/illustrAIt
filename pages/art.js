import example from '../public/example.png'
import Link from 'next/link';
import useSWR from 'swr'
import Image from 'next/image'
import {useSession, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';

//Takashi Murakami, Jean-Michel Basquiat, Jeff Koons, Kieth Haring
export default function Art() {
    const query = "cat feeding a carrot to her kittens in the style of ivan bilibin"
    const [art, setArt] = useState("");
    const [urls, setUrls] = useState([])
    const [visible, setVisible] = useState(false);
 
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('/api/userdata', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    function getDalle2() {
        console.log(data)
        setVisible(true)
        // setError(false);
        // setLoading(true);

        fetch(`/api/dalle2?q=${query}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //let temp = []
            setArt(data.result.data[0].generation.image_path);
            // data.result.data.map(item =>{temp.push(item.generation.image_path)})
            // setUrls(temp)
            setVisible(true)
            //console.log(urls)
            //setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            // setLoading(false);
            // setError(true);
          });
       
      }

    return(
        <>
        <br/>
       
            
            {visible &&
                
                <Image src={art} height={500} width={500}></Image>
                
            }
        
        <br/>
        <button onClick={getDalle2}>dalle</button>
        <button><Link href="/">home</Link></button>
        </>

    );
  }



//   {"result":{
//       "object":"list",
//       "data":[
//           {"id":"generation-Cu1JbEQxiJUFNtFB7N6rLVXg",
//           "object":"generation",
//           "created":1665680468,
//           "generation_type":"ImageGeneration",
//           "generation":{
//               "image_path":"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-Cu1JbEQxiJUFNtFB7N6rLVXg/image.webp?st=2022-10-13T16%3A02%3A09Z&se=2022-10-13T18%3A00%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-13T16%3A08%3A52Z&ske=2022-10-20T16%3A08%3A52Z&sks=b&skv=2021-08-06&sig=9FwZgw2j46wFoxfkzcA%2BwP7mfgjQkQQpKZ%2B66weNEmo%3D"
//             },
//            "task_id":"task-bon4oLszbDKPtVHKzZREwuJw",
//            "prompt_id":"prompt-ccW2Qmzrhc8uqyj3UKc9wCh7",
//            "is_public":false},

//            {"id":"generation-YJeUQtwesoPZWAcG9xtx2PZy",
//            "object":"generation","created":1665680466,"generation_type":"ImageGeneration","generation":{"image_path":"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-YJeUQtwesoPZWAcG9xtx2PZy/image.webp?st=2022-10-13T16%3A02%3A09Z&se=2022-10-13T18%3A00%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-13T16%3A08%3A52Z&ske=2022-10-20T16%3A08%3A52Z&sks=b&skv=2021-08-06&sig=szjWt4QbdpPCnFVtHuER5xZMJxSuEGDzAuyORTj8gzw%3D"},"task_id":"task-bon4oLszbDKPtVHKzZREwuJw","prompt_id":"prompt-ccW2Qmzrhc8uqyj3UKc9wCh7","is_public":false},{"id":"generation-8IivKWHRlnOud2oia6clEeKU","object":"generation","created":1665680466,"generation_type":"ImageGeneration","generation":{"image_path":"https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-8IivKWHRlnOud2oia6clEeKU/image.webp?st=2022-10-13T16%3A02%3A09Z&se=2022-10-13T18%3A00%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-13T16%3A08%3A52Z&ske=2022-10-20T16%3A08%3A52Z&sks=b&skv=2021-08-06&sig=Eu46I1JRH1LSq0Qdn%2BO7yi/VIXQmUo7ZusLwbus2r7I%3D"},"task_id":"task-bon4oLszbDKPtVHKzZREwuJw","prompt_id":"prompt-ccW2Qmzrhc8uqyj3UKc9wCh7","is_public":false},{"id":"generation-aXyUIkZgHXUo66J16vdMLA6E","object":"generation","created":1665680468,"generation_type":"ImageGeneration","generation":{"image_path":
//   "https://openailabsprodscus.blob.core.windows.net/private/user-bJIqmx887APGHewBpZ3qUiQU/generations/generation-aXyUIkZgHXUo66J16vdMLA6E/image.webp?st=2022-10-13T16%3A02%3A09Z&se=2022-10-13T18%3A00%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-10-13T16%3A08%3A52Z&ske=2022-10-20T16%3A08%3A52Z&sks=b&skv=2021-08-06&sig=SRD6%2BtUnOIaMJwfqfgA/3LhwxLal5CN6ph1oDlUmBVI%3D"},"task_id":"task-bon4oLszbDKPtVHKzZREwuJw","prompt_id":"prompt-ccW2Qmzrhc8uqyj3UKc9wCh7","is_public":false}]}}