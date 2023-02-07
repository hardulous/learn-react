import React , {useEffect} from 'react'

const NewProducts = () => {

 console.log("New Render");

  useEffect(()=>{

    return()=>{
      console.log("New Unmounted")
    }

  },[])

  return (

    <>
    

       <h3>New Component</h3>

    
    </>

  )

}

export default NewProducts

// nested route component for products