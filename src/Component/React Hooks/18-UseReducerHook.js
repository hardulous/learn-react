
import React , {useReducer} from 'react'


const initialState = 0;

// here reducer is a pure function which based on action return new state of component and does not perform any side effect and whatver new state return by this reducer my component state that is Counter will be equal to that 
const reducer = ( state , action ) =>{

    switch (action) {

        case 'Increment':
           
          return state+1;
                
        case 'Decrement':
            
          return state-1;

        case 'Reset':
            
          return initialState

        default:
            
          return state;
    }

}

const UseReducerHook = () => {

  // useReducer hook take reducer and intial state of component as argument and return state Counter and dispatch method which we can use update state in reducer method
  const [Counter, dispatch] = useReducer(reducer,initialState)
   
  console.log(Counter)

  return (

    <>
    

      <h1>UseReducer Hook</h1>
      
      <h4>{Counter}</h4>

      <button onClick={()=>{dispatch('Increment')}}>Increment</button>

      <button onClick={(e)=>{dispatch('Decrement')}}>Decrement</button>

      <button onClick={()=>{dispatch('Reset')}}>Reset</button>


    </>

  )

}

export default UseReducerHook