import React, { useEffect, useState } from 'react'

const MultipleUseEffect = () => {

  const [Name, setName] = useState('')
  const [Value, setValue] = useState(0)

  useEffect(() => {
    
    console.log("I am useEffect Hook - 1")
    document.title=Name;
   
  }, [Name])
  
  useEffect(() => {
    
    console.log("I am useEffect Hook - 2")
   
  }, [Value])

  return (

    <>
    
      
      <h1>Multiple UseEffect Hook</h1>

      <input type="text" value={Name} onChange={

          (e)=>setName(e.target.value)}

      />

      <input type="number" value={Value} onChange={

          (e)=>setValue(e.target.value)}

      />
       
      <li>Name is = {Name}</li>
      <li>Marks is = {Value}</li>

    </>

  )

}

export default MultipleUseEffect

// If we have more than one side Effect to run so making all side effect code in single useEffect is very bad but we can make multiple useEffect hook in a single function component , and their order of execution is also the way they are defined in body of component 

// but this above thing can not be done in class component as related or un-related side Effect code are always in different lifecycle method 

// Note : avoid using array and object as dependency because of shallow comparison of props and state as dependency as if primitive the way useEffect re-run is based on wheter their value is same or not but in case of array and object the way useEffect will re-run is based on wheter obejct and array refernence type is same or not because doing setState( { same object } ) will return new object as a result of shallow comparison previous or new object is awlays different even if their value is same so useEffect will re-run even it is not supposed to run , so always se primitive type as part of dependency array list 