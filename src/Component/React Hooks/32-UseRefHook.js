
import React, { useEffect , useRef, useState } from 'react'

const UseRefHook = () => {

    // ref is created with intila value is null
    const InputRef = useRef(null);

    // ref is created with current value 0
    const IntervalRef = useRef(0);

    const [Counter, setCounter] = useState(0)

    useEffect(()=>{

        console.log(InputRef);
        console.log(IntervalRef);
        InputRef.current.focus();

        IntervalRef.current = setInterval(()=>{

            setCounter(prevCount => prevCount+1);

        },1000)

        return ()=>{
            clearInterval(IntervalRef.current);
        }

    },[])

  return (

    <>
    

      <h1>UseRef Hook</h1>
      {/* using ref now we will focus on below input when component is mounted */}
      <input type="text" ref={InputRef}/>

      <h3>Counter is {Counter}</h3>
      <button onClick={()=>{

        console.log(IntervalRef.current);
        clearInterval(IntervalRef.current)

      }}>Stop Counter</button>


    </>

  )

}

export default UseRefHook

// here useRef(null) hook will return a reference object in which any DOM element can come inside it means it can hold a DOM element and can access it by .current property of this object 

// here steps to create ref using useRef() hook is similar to React.createRef() so we can use both interchangibly but useRef() hook will not work in class component but React.createRef() method will work in both class and function component

// here ref object returned by useRef() hook is a mutable object means it can also store any value of any data-type not only DOM and that value persist and remain same thoughout the re-render and also changed to this value will not trigger re-render , this value also present in .current property of ref object 

// now we are creating a timer that is when component is mounted interval is started which will increase the count state value by 1 in each sec and display on DOM and by pressing on button we will stop the timer  