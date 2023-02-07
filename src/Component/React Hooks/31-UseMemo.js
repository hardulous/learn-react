
import React, { useState , useMemo } from 'react'

const UseMemo = () => {

  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCounterTwo] = useState(0);
  
  const IncrementOne = ()=>{
      setCounterOne(CounterOne+1);
  }

  const IncrementTwo =()=>{
      setCounterTwo(CounterTwo+1);
  }

    // const isEven = ()=>{
      
    //   console.log("I WILL TAKE TO MUCH TIME")

    //   for (let i = 0; i < 2000000000; i++) {
        
    //   }
    //   return CounterOne%2===0;
    // }


  // now instead of above we will use optimized version of above function by useMemo() which will not return new function but cached value which is returned by that function

   const isEven = useMemo( ()=>{
    
    console.log("I AM EXECUTED AGAIN BASED ON CONIDITON")
    
    for (let i = 0; i < 2000000000; i++) {
        
    }
    return CounterOne%2===0;

  } , [CounterOne] );  // here now only when CounterOne state value get changed then only this method will run again and calculate new Cached value and return that Cached value to be used in component 

  return (

    <>
    
      <h1>UseMemo Hook</h1>

      <button onClick={IncrementOne}>Count-One = {CounterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>

      <button onClick={IncrementTwo}>Count-Two = {CounterTwo}</button>

    </>

  )

}

export default UseMemo

// here what happening basically is that we have 2 state counter1 and 2 and each get updated by their increment method , and using counterone state value i am performing isEven function which return wheter counterOne is even or not or display in UI , here in real world app we genrally perform some heavy task which takes a lot of time so now after 200000000 iteration we will return wheter counterOne is even or not , now due to this re-render takes around 2 to 3 sec then usual but now when i click on counterTwo button it is also taking more time than usual this is because if we change any of state either counterOne and counterTwo re-render take place as a result isEven method get executed again which take another 2 to 3 sec , so to avoid this we have to tell react not to recalculate certain values unnecessary usually the one which takes a lot of time , so here we need to tell react not to recalculate wheter counterone is odd or even if we are changing countertwo value 

// to solve above problem we will use useMemo() hook , it is a hook which will re-compute the cached values only when one of the dependency has changed , this optimization helps to avoid expensive calculation on every render 

// SINTAX :::

// useMemo( 'Callback function' , [dependency array list] ) , this will return the cached value which is getting returned by inside callback function to be used in component and calculate new value only when any depedency variable changed 

// now changing counterTwo will trigger re-render but this time isEven() function will not be executed again because we have changed CounterTwo not CounterOne which is a dependency variable , but if we change CounterOne then isEven() will ignore previos cached value and calculate new value for use 