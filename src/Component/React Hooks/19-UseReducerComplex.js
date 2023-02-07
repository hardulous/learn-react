
import React , {useReducer} from 'react'

const initialState = {

    firstCounter:0,
    secondCounter:10,

}

const reducer = ( state , action )=>{
    
    console.log(action);

    switch (action.type) {

        case 'Increment1':
           
          return {...state,firstCounter:state.firstCounter+action.value}
                
        case 'Decrement1':
            
          return {...state,firstCounter:state.firstCounter-action.value}

        case 'Reset1':
            
          return {...state,firstCounter:initialState.firstCounter}

          case 'Increment2':
           
          return {...state,secondCounter:state.secondCounter+action.value}
                
        case 'Decrement2':
            
          return {...state,secondCounter:state.secondCounter-action.value}

        case 'Reset2':
            
          return {...state,secondCounter:initialState.secondCounter} 

        default:
            
          return state;
    }

}

const UseReducerComplex = () => {


  const [CounterObj, dispatch] = useReducer(reducer,initialState)

  console.log(CounterObj);
   
  return (

    <>
    
      <h1>UseReducer Hook Complex</h1>
      
      <h4>First Counter is = {CounterObj.firstCounter}</h4>

      <button onClick={()=>{dispatch({type:'Increment1',value:1})}}>Increment Counter1</button>

      <button onClick={()=>{dispatch({type:'Decrement1',value:1})}}>Decrement Counter1</button>

      <button onClick={()=>{dispatch({type:'Reset1'})}}>Reset Counter1</button>

      <h4>Second Counter is = {CounterObj.secondCounter}</h4>

       <button onClick={()=>{dispatch({type:'Increment2',value:1})}}>Increment Counter2</button>

      <button onClick={()=>{dispatch({type:'Decrement2',value:1})}}>Decrement Counter2</button>

      <button onClick={()=>{dispatch({type:'Reset2'})}}>Reset Counter2</button>

    </>

  )

}

export default UseReducerComplex

// using useReducer we can maintain state as an object and use its property indiviually as state of component and this is useful for complex state management 