
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectFetchData1 = () => {

    const [Posts, setPosts] = useState([]);

    useEffect(() => {
      
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[]) // we have to put dependency array list as empty because otherwise setPost() will triger re-render and useEffect is called again as a reseult again data will be fetched and again setPost() triggerr re-render and same process again and again 
     
  return (
    
    <>
    
    <h1>Data Fetching UseEffect - 1</h1>

    <ul>
        {
            Posts.map((Post,index)=>{

                if(index<10){

                    return <li key={Post.id}>{Post.title}</li>

                }else{
                    return null;
                }

            })
        }
    </ul>

    </>
    

  )

}

export default UseEffectFetchData1

// useEffect hook to fetch data from API endpoint as it is used to make side effect