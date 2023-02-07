
import React,{useState} from 'react'

// Context is created 
export const CountContext = React.createContext();

const ContextParent2 = ( { children } ) => {

  const [Count, setCount] = useState(0)

  console.log('Context Parent2 Render');

  return (

    <>
    

      <h1>Context And Same Element Reference</h1>
      <button onClick={()=>{setCount(c=>c+1)}}>Count - {Count}</button>
      
      <CountContext.Provider value={Count}>
         
         {/* here this childrem  */}
        {children}

      </CountContext.Provider>
    
    </>

  )

}

export default ContextParent2

// here performing optimization using same element refernce technique

// here what is happening as state update by setter function then parent component triiger re-render howeevr react know that this re-render oocurs because of changes to state count as a component can not modify its own props which means this children props could not have been modified as a result this children prop which is ChildA2 component will not re-render but due to context value is getting consumed by this ChildC2 component so only ChildC2 component will re-render 

// so when using Context to perform optimization make sure to wrap the immediate child of context provider with Memo function or use children props as same element reference 