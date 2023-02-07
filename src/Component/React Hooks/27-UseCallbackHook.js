
import React, { useState , useCallback } from 'react'
import Title from './28-Title'
import Button from './29-Button'
import Counter from './30-Counter'

const UseCallbackHook = () => {

    const [Age, setAge] = useState(20);
    const [Salary, setSalary] = useState(10000);
    

    // ###### BELOW IS UNOPTIMIZED FUNCTION

    // const IncrementAge = ()=>{
   
    //     setAge(prevAge=>prevAge+1);
    // }

    // const IncrementSalary = ()=>{

    //     setSalary(prevSalary=>prevSalary+1000);
    // }


    // ########## using useCallback to use memoized version of above methods

    const IncrementAge = useCallback( ()=>{
      
        setAge(Age+1);
         
    } , [Age] );  // here same object or function will be used as long as Age state does not change which avoid re-rendering


    const IncrementSalary = useCallback( ()=>{

        setSalary(prevSalary=>prevSalary+1000);

    } , [Salary] ) // here same object or function will be used as long as Salary state does not change which avoid re-rendering
  
  console.log("Rendering Parent Component")

  return (

    <>
    

      <Title/>

      <Counter text="Age" count={Age}/>
      <Button handleClick = {IncrementAge}>Increment Age</Button>
      
      <br /> <br />

      <Counter text="Salary" count={Salary}/>
      <Button handleClick = {IncrementSalary}>Increment Salary</Button>


    </>

  )

}

// export default UseCallbackHook
export default React.memo(UseCallbackHook);

// here we have title component which render h2 tag after that we have counter component which display Age of a person and button component which increase age , and then again we have same pair of counter and button for displaying and increasing salary of a person 

// here notice if we increase either of age and salary of a component then it will render the whole component with nested child as well , this rendering have no issue for some component but if we have around 100 or 50 component then it will be a performance issue in our app

// here to solve performance issue we can use React.memo() feture while exporting a function by which a component will be rendered again only shallow comparison of both its props and state is false and if it is true then component will not be re-renderd , but this will also not solve our problem as by React.memo() now Title component will not be rendered again but if we update either of age and salary then both button of age and salary will be rendered again even if we are not chaning other one , this is because shallow comparison in case of function are reference type that is instead of value of function their reference in memory is checked and as each time when parent component is mounted object and refernce are newly created and as functions are also object in javascript their refernce are checked for shallow comparison which in result always false as each time new IncrementAge and new IncrementSalary will be created as a result both button are getting re-rendered again 

// so to tell react that there is not need to create new IncrementAge and IncrementSalary function each time parent component is re-rendered and to solve above issue we use useCallback() hook 

// SINTAX ::

// useCallback( 'callback function', [dependency array list] ) is a hook that return a memoized version of the callback function that only changes if one of the dependencies has changed

// useCallback() hook with empty dependency arraylist which result in formation of only one time a function and after that , that function reference will be used throughtout the project , but in this case inside this function if we are updating state variable based on previous value then always use setter function with preState callback function otherwise stale state bug will come 