
import {useState} from 'react'

// custom hook for Counter functionality , if didnt passed any value to useCounter then 0 will be used as default value
const useCounter = (value = 0) => {
  
    console.log("I am UseCounter Hook")

  // similar logic code
  const [Counter, setCounter] = useState(value)

  const Increment = ()=>{
      setCounter(prevCount => prevCount+1);
  }

  const Decrement = ()=>{
      setCounter(prevCount => prevCount-1);
  }

  const Reset = ()=>{
      setCounter(value);
  }

  // returning same required values
  return [ Counter , Increment, Decrement, Reset];

}

export default  useCounter