
import React , {useReducer} from 'react'

const initialValue = 0;

const reducer = (state,action)=>{

    switch (action) {

        case 'Increment': return state+1;
        
        case 'Decrement': return state-1;

        case 'Reset': return initialValue;

        default: return state;
          
    }
}

const UseReducerRender = () => {

  const [Counter, dispatch] = useReducer(reducer,initialValue);
   
  console.log("UseReducer Render");

  return (

    <>
    
    
      <h1>UseReducer Rendering Behaviour</h1>
      
      <h4>Counter = {Counter}</h4>
      <button onClick={()=>{dispatch('Increment')}}>Increment</button>
      <button onClick={()=>{dispatch('Decrement')}}>Decrement</button>
      <button onClick={()=>{dispatch('Reset')}}>Reset</button>


    </>

  )

}

export default UseReducerRender

// here what happend after intial render we have App component and this component in tree , when we click on any button the useReducer dispatch method dispatch an action and flagged this component as needs an update , in render phase react first find this flagged component then react convert this component JSX again into react element and stored the output which then compare this new rendered output with previous render output and passes changes to the commit phase and mount the changes to the DOM

// here just like useState useReducer also have some exceptions that is if we update the state to the same value after initial  render then component will no re-render but if u update state value same to current state after re-render completed then component will only render one more time but will not commit changes to the DOM and after that component will not re-render again 

// all above process similar to useState hook 