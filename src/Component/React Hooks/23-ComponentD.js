
import React ,{ useContext } from 'react'
import ComponentE from './24-ComponentE'
import { CounterContext } from './25-ContextForUseReducer'

const ComponentD = () => {

  // consuming context value
  const ContextObj = useContext(CounterContext);

  return (

    <div className='CHILD-2'>
    
      <h4>Child Component D = {ContextObj.Counter}</h4>

      <button onClick={()=>{

          ContextObj.dispatch("Decrement")

      }}>Decrement Counter From Component D</button>

      <ComponentE/>


    </div>

  )
  
}

export default ComponentD