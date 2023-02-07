import React, { useEffect, useState } from 'react'

const RunEffectOnlyOnce = () => {

    const [Cords, setCords] = useState({

        x:0,
        y:0,

    })

    // here  this useEffect hook will be executed only once because of empty dependency array list 
    useEffect(() => {
      
      console.log("UseEffect is executed only once")
      window.addEventListener('mousemove', (e)=>{

        setCords({

            x:e.clientX,  // coordinate of mouse in X axis
            y:e.clientY,  // coordinate of mouse in Y axis

        })

      })

    }, [])
    

  return (

    <>
    
      <h1>Run UseEffect Only Once</h1>

      <h3>X -{Cords.x} and Y -{Cords.y}</h3>

    </>

  )

}

export default RunEffectOnlyOnce

// some time we want useEffect hook to execute only once through out the life cycle of a component , so in these case we use UseEffect Hook with empty dependency array list and by this useEffect Hook work as componentDidMount() and execute only in first rendering of a component 