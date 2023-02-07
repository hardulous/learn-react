
import React,{useState} from 'react'
import { ChildA } from './21-ContextChild';

// Context is created 
export const CountContext = React.createContext();

const ContextParent = () => {

  const [Count, setCount] = useState(0)

  console.log('Context Parent Render');

  return (

    <>
    

      <h1>Context Rendering</h1>
      <button onClick={()=>{setCount(c=>c+1)}}>Count - {Count}</button>
      
      {/* providing context value */}
      <CountContext.Provider value={Count}>

          <ChildA/>

      </CountContext.Provider>
    
    </>

  )

}

export default ContextParent

// here we have 3 nested component ContextParent , childA and ChildB and ChildC component , when parent ContextParent render and childa , b and c also re-render because of default react behaviour.

// now using context we will pass count value from parent component to child c component and dispay it there by consuming it

// here passing count as context value we expect that when we update the count means passing new value to .Provider as a result both parent and component consuming this context value get re-render but this will not happen , infact all component wheter using context ot not will also re-render because of default behaviour of react that is is parent re-render then its child also re-render , so to avoid other component to re-render which are not using this context value we will use React.Memo() , and by this now only parent component and as only child c component is using the context value will re-render 

// 