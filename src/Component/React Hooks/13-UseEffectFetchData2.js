
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UseEffectFetchData2 = () => {

    const [Id, setId] = useState(1);
    const [singlePost, setsinglePost] = useState({});
    
    useEffect(() => {
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(res=>{
            console.log(res);
            setsinglePost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

        return ()=>{
            console.log("CLeanup");
        }
      
    }, [Id]) // here by Id dependency array list each time when id change we will fetch new post by triggering useEffect again 
    

  return (

    <>
    
      <h1>Data Fetching useEffect - 2</h1>

      <input type="text" value={Id} onChange={e=>setId(e.target.value)}/>

      <li>Single post with id {Id} is = {singlePost.title}</li>

    </>

  )

}

export default UseEffectFetchData2

// now using state variable we will fetch single post data by post id