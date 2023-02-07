
import {useEffect} from 'react'

// Custom hook which accpet count as value and update the document title to that count value
const useDocumentTitle = (Count) => {

  console.log("I am Custom Hook")
   //  here below is the code which remain same for every component which is using this Hook
   useEffect(()=>{
    
    document.title = `Title is ${Count}`

  },[Count])

}

export default useDocumentTitle

// Function name for custom hook should always start with the word 'use' otherwise rules for hook will not be applied on this function 

// we can remove import of React because we are not returing any JSX