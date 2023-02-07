import React, { useState , useEffect } from 'react'

const UseEffectHook = () => {

    const [Count, setCount] = useState(0);

    // useEffect Hook , here this useEffect executed for first time as componentDidMount , and after every new rendered of a component by updating state variable Count then it is executed as componendDidUpdate

    useEffect(() => {
      
        console.log("useEffect is rendered")
        console.log(Count);
        document.getElementById('btn').innerText = `Clicked ${Count} times`;

    })
    

  return (
    
    <>

      {console.log("Rendered Component")}
       
      <h1>UseEffect Hook</h1>
      <button id="btn" onClick={()=>{

          setCount((prevState)=>{
              return prevState+1;
          })

      }}>increment count</button>

    </>

  )

}

export default UseEffectHook

// useEffect hook is used to perform side effect in function based component and handle everything what componentDidMount, componentDidUpdate and componentWillUnmount methods do in class component 

// this useEffect is also a function which take function as an argument which get executed after every rendered of a component