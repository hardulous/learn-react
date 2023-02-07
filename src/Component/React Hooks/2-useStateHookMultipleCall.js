import React, { useState } from 'react'

const UseStateHookMultpleCall = () => {

    const [Count, setCount] = useState(0);

    const incrementFive = ()=>{

        for(let i=0 ;i<5;i++)
        {
            // setCount(Count+1);
            // show 5 console.log with value 0
            // console.log(Count);

            // to avoid above thing we use setCount() with previos state value

            setCount((prevState)=>{
                return prevState+1;
            })

            // unlike this.setstate() the setter function of state variable of function component does not contain 2nd callback function which execute after state has been updated if u add it , it will show error 

            // still because of asyn nature of setCount() 5 console.log with current value will be shown but now incremented value will carry along the way 
            console.log(Count);

            // so again when u trying to update state value based on pervious state always use above appraoch 
        }

    }

  return (

     <>
     
       <h4>Count = {Count}</h4>
       <button onClick={()=>{setCount(Count+1)}}>Increment Count</button>
       <button onClick={()=>{setCount(Count-1)}}>Decrement Count</button>
       <button onClick={()=>{setCount(0)}}>Rest Count</button>

       {/* here again similar to this.setState() react is trying to make multiple setCount() call in one go and incremented value does not get carry along the way that is why it is showing 5 console.log with value 0 */}
       <button onClick={incrementFive}>Increment by 5</button>

     </>

  )

}

export default UseStateHookMultpleCall