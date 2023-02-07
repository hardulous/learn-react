
import React, { useContext } from 'react'
import ComponentD from './23-ComponentD'
import { CounterContext } from './25-ContextForUseReducer'

const ComponentC = () => {

  // consuming context value
  const ContextObj = useContext(CounterContext);
  console.log(ContextObj)

  return (

    <div className='CHILD-1'>
    
      <h4>Child Component C = {ContextObj.Counter}</h4>

      <button onClick={()=>{

          ContextObj.dispatch("Increment")

      }}>Increment Counter From Component C</button>

      <ComponentD/>
      

    </div>


  )

}

export default ComponentC