
import React , {useContext, useState} from 'react'
import { CountContext } from './22-ContextParent2'

export const ChildA2 =  () => {

  console.log("Child-A2 Render")

  return (
    <>
    

      <h4>Child A2</h4>
      <ChildB2/>
    
    </>

    )
}

export const ChildB2 =  ()=>{

  console.log("Child-B2 Render")

  return (

    <>
    
      <h4>Child B2</h4>
      <ChildC2/>  

    </>
  )
}

export const ChildC2 =  ()=>{
    
    // consuming context value
    const Count = useContext(CountContext);

    console.log("Child-C2 Render")
  
    return (
  
      <>
      
        <h4>Child C2 - {Count} </h4>
  
      </>
    )
}
