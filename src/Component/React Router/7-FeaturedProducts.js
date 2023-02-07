import React , {useEffect} from 'react'

const FeaturedProducts = () => {

  console.log("Featured Render");

  useEffect(()=>{

    return()=>{
      console.log("Featured Unmounted")
    }

  },[])

  return (

    <>
    
      <h3>Featured Products</h3>

    </>

  )

}

export default FeaturedProducts

// nested route component for products

// here now i have also made this component as index means if Products url is hit by user then inside Products component featured component will be shown as default in Outlet component position even as featured is nested route component 