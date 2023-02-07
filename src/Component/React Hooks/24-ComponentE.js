
import React ,{ useContext } from 'react'
import { CounterContext } from './25-ContextForUseReducer'

const ComponentE = () => {

  // consuming context value
  const ContextObj = useContext(CounterContext);

  return (

    <div  className='CHILD-3'>


      <h4>Child Component E = {ContextObj.Counter}</h4>

      <button onClick={()=>{

        ContextObj.dispatch("Reset")

      }}>Reset Counter From Component E</button>


    
    </div>

  )

}

export default ComponentE