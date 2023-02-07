
import React, { useState } from 'react'

// import Custom Hook
import useCounter from './38-useCounter'

const UseCounterCustomHook1 = () => {

  // const [Counter, setCounter] = useState(0)

  // const Increment = ()=>{
  //     setCounter(prevCount => prevCount+1);
  // }

  // const Decrement = ()=>{
  //     setCounter(prevCount => prevCount-1);
  // }

  // const Reset = ()=>{
  //     setCounter(0);
  // }

  // here now we will use our Custom Hook
  const [Counter,Increment,Decrement,Reset] = useCounter(5);

  return (

    <>
    

      <h1>Custom Hook - useCounter 1</h1>
   
      <h4>Count - {Counter}</h4>

      <button onClick={Increment}>Increment</button>     
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>



    </>

  )

}

export default UseCounterCustomHook1

// here this component display count with 3 button increment , decrement and reset the counter