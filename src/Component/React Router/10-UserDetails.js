
import React , {useEffect} from 'react'
// hook for getting route parameter
import { useParams } from 'react-router'

const UserDetails = () => {
    
  console.log('Users Details Render')

  // using useParams() hook
  const Params = useParams();
  
  console.log(Params);

  useEffect(()=>{
      
    return ()=>{
        console.log('Users Details Unmounted')
    }
  },[])

  return (

    <>
    

      <h1>User Detail - {Params.userId}</h1>


    </>

  )

}

export default UserDetails

// this component will be shown as per user id on routes 

// to extract route parameter we have useParam() hook which is a function which return a object of key-value pair