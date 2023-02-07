import React,{useEffect} from 'react'

const Admin = () => {

      
  console.log("Admin Render");

  useEffect(()=>{

    return()=>{
      console.log("Admin Unmounted")
    }

  },[])

  return (

    <>
    

      <h1>Admin Component</h1>

    
    </>

  )

}

export default Admin