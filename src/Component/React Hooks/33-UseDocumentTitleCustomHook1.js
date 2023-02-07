
import React, { useEffect, useState } from 'react'

// importing our custom hook
import useDocumentTitle from './35-useDocumentTitle';

const UseDocumentTitleCustomHook = () => {

  const [Count, setCount] = useState(0);

  // useEffect(()=>{

  //   document.title = `Title is ${Count}`

  // },[Count])

  // now instead of useEffect to update document title we will use our Custom Hook
  useDocumentTitle(Count); 

  const handleClick = ()=>{
    setCount(prevCount=>prevCount+1);
  }

  return (

    <>
    

      <h1>Custom Hook - useDocumentTitle 1</h1>
       
      <h4>Document title is {Count}</h4>

      <button onClick={handleClick}>Increase Count</button>

    
    </>

  )

}

export default UseDocumentTitleCustomHook

// this component based on count value will update the document title 

// to make custom hook we will extract that logic which is to be used and remain same in many component 