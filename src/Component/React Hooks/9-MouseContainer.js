import React, { useEffect, useState } from 'react'

const MounterContainer = () => {

    const [Cords, setCords] = useState({

        x:0,
        y:0,

    })

    useEffect(() => {
      
      console.log("MouseContainer is mounted")

      // when a compounted is mounted adding event listner
      window.addEventListener('mousemove', logMouse)

      // performing clean up action similar to compnentWillUnmount of class component , here function is returning will be executed whenever a component is removed from DOM and unmounted 
      return () => {
          
        console.log("Component is Unmounted");
        window.removeEventListener('mousemove',logMouse);

      }

    },[])

    const logMouse=(e)=>{
      
      setCords({

        x:e.clientX, 
        y:e.clientY,  

      })

    }
    
    

  return (

    <>
    
      <h1>Mouse Container</h1>

      <h3>X -{Cords.x} and Y -{Cords.y}</h3>

    </>

  )

}

export default MounterContainer

// here useEffect() Hook take a function as an argument and that function can return a another function which will be executed when a component is unmounted 