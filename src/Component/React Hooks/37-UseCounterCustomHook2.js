
import React, { useState } from 'react'

import useCounter from './38-useCounter'

const UseCounterCustomHook2 = () => {

//   const [Counter, setCounter] = useState(0)

//   const Increment = ()=>{
//       setCounter(prevCount => prevCount+1);
//   }

//   const Decrement = ()=>{
//       setCounter(prevCount => prevCount-1);
//   }

//   const Reset = ()=>{
//       setCounter(0);
//   }

  const [Counter,Increment,Decrement,Reset] = useCounter();
  
  console.log("I am Component");

  return (

    <>
    

      <h1>Custom Hook - useCounter 2</h1>
   
      <h4>Count - {Counter}</h4>

      <button onClick={Increment}>Increment</button>     
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>



    </>

  )

}

export default UseCounterCustomHook2

// here lets say this component also have counter state and 3 button to increment , decrement or reset state , here now instead of repeting code we will create and use Custom Hook 

// here after using custom hook what is basically happen is that 