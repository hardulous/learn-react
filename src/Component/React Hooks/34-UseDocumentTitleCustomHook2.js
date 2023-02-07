
import React, { useEffect, useState } from 'react'
import useDocumentTitle from './35-useDocumentTitle';

const UseDocumentTitleCustomHook2 = () => {

  const [Count, setCount] = useState(0);

//   useEffect(()=>{

//     document.title = `Title is ${Count}`

//   },[Count])

  useDocumentTitle(Count); 

  const handleClick = ()=>{
    setCount(prevCount=>prevCount+1);
  }
  
  console.log("I am Component");

  return (

    <>
    

      <h1>Custom Hook - useDocumentTitle 2</h1>
       
      <h4>Document title is {Count}</h4>

      <button onClick={handleClick}>Increase Count</button>

    
    </>

  )

}

export default UseDocumentTitleCustomHook2

// here note both UseDocumentTitleCustomHook1 component and UseDocumentTitleCustomHook2 component performin same task and executing same code that is updating document title and this is code and logic repetion  , now let say if we have 10 different component nested below and perform same updating document title then repeating this code and logic again and again is very bad , so for this we will create Custom Hook which will update the document title for us 

// here by Custom hook what is happening basically is that , first state variable Count will be instilized with value 0 then we have called our Custom hook with value 0 , inside custom hook we have useEffect hook which will set our document title with passed in count value and then execution go back to this component and it render the JSX , after first render if we click on button means increased the Count state value by 1 which in turn trigger re-render by which custom hook is executed again with new value of count and hence updated the document title again