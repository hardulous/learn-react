import React, { useState , useEffect } from 'react'

const UseEffectWithIncorrectDeps = () => {

    const [Counter, setCounter] = useState(0);

    useEffect(() => {
      
      let interval = setInterval(Tick,1000);

      // here this clean up execute btw each new rendering 
      return ()=>{
          clearInterval(interval);
      }

    } , [] ) // here either put counter as dependency or use setState with prevState method
    
    const Tick = ()=>{
        
        // this will keep on executing by setInterval
        // console.log(`React is not watching me`);
        setCounter(prevState => prevState+1);
    }
  
  return (

    <>
    
      <h1>UseEffect With InCorrect Dependency</h1>
      <p>{Counter}</p>

    </>

  )

}

export default UseEffectWithIncorrectDeps

// ######### STALE STATE PROBLEM ##################

// here by empty dependency list useEffect will be executed only once which is starting the timeInterval method and when component is unmounted we will clear interval 

// but if we thing dependency array list is a way to specify when to re-run the useEffect() then it going to run into problem instead dependency array list is a way to let react know about everything that the effect must watch for changes and re-rendering , and here by empty dependency list we have told react to ignore watching changes to any state and props , here making this same component for class based component will not make this problem

// here state is not updating after initial update because of stale state problem so to avoid this use setState with callback function 

// when u have to call method from useEffect that is using and state and prop value always try to define that method in useEffect body to avoid forgotting about dependency 
