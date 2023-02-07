
import React , {useContext, useState} from 'react'
import { CountContext } from './20-ContextParent'

export const ChildA = React.memo( () => {

  console.log("Child-A Render")

  return (
    <>
    

      <h4>Child A</h4>
      <ChildB/>


    </>
  )
} )

export const ChildB = ()=>{

  console.log("Child-B Render")

  return (

    <>
    
      <h4>Child B</h4>
      <ChildC/>  

    </>

  )
}

export const ChildC = ()=>{
    
    // consuming context value
    const Count = useContext(CountContext);

    console.log("Child-C Render")
  
    return (
  
      <>
      
        <h4>Child C - {Count} </h4>
  
      </>
  
    )
}

// here now i have uses React.Memo() for each component , so now when Context value that is Count update the parent component re-render but now as all child are wrapped in React.Memo() so if there props does not changed so they will not re-render but due to context as its value is changed so which ever component is using this context value will also re-render that is only ChildC component re-render .  