
import React , {useState} from 'react'

const UseStateHook = () => {

  // this is array destructuring 
  const [counter, setcounter] = useState(0);

  const increaseCount=()=>{

    setcounter(counter+1);
    // here again similar to this.setState() this setCounter() is also a asyn function which means get executing in background and rest of tasking is also doing that is why below console.log is showing previous value even setCounter is executed before it 
    console.log(counter);


  }

  return (

    <>

      <h4>Counter = {counter}</h4>
      <button onClick={increaseCount}>Increase Count</button>  

    </>

  )

}

export default UseStateHook

// here import useState hook from react and syntax is :

// useState() here this hook or function take value as current value of state which can be any data type like integer , string , object etc and return a state variable with that value and a function which can be used to update this state variable 

// here unlike in class component we can make only one state variable in constructor and with name must be state but in function based component we can use multiple time useState() hook and can make multiple state variable with any name we want  

// Some Rules for Hook

// only call hooks at the top level of react function component and dont call hook inside loops , condition and nested function and this hooks work only for react function component 