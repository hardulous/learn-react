
import React , {useReducer} from 'react'
import ComponentC from './22-ComponentC'

// context api
import { CounterContext } from './25-ContextForUseReducer'

const initialState = 0;

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

const UseReducerWithContext = () => {

  // here i will pass this Counter state and dispatch method to all component C,D and E by useContext() hook
  const [Counter, dispatch] = useReducer(reducer,initialState)

  return (

    <div className='PARENT'>
    
      <h1>UseReducer With UseContext</h1>

      <h4>Parent Component Counter = {Counter}</h4>
       
      {/* here giving all child component access to state and dispatch method by context api */}

      <CounterContext.Provider value={{Counter,dispatch}}>

        <ComponentC/>

      </CounterContext.Provider>
 
    </div>

  )

}

export default UseReducerWithContext

// here so far we have used useReducer with local state management but at some point we want to share state between component that is want global state , so for this we can combine useReducer and useContext 

// let say i have 3 component and each of 3 component have been maintaining its own counter so making useReducer hook in each component is a repetitive task and also let say each component is using same state for counter , so instead of making seprate state for each component we will make one state and using useContext will pass it to each component 

// although same task can be done using props drilling but if component are nested deep down so have to use context api

// here let say component C,D and E is nested very deep i want to pass state and reducer dispatch from parent component to them 