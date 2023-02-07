
import React, { useState } from 'react'
import Parent2 from './6-Parent2';
import Child2 from './7-Child2';

const GrandParent = () => {

  const [Count, setCount] = useState(0);
  
  console.log("GrandParent Render");
  return (

    <>
    
      <h3>GrandParent Component</h3>

      <button onClick={()=>{setCount(pc=>pc+1)}}>Count - {Count}</button>
      
      <Parent2 value={Count}>
          <Child2/>
      </Parent2>

    </>

  )
}

export default GrandParent

// here when we clicked on the button state setter function is called which make this grandparent component to re-render and if parent component is render then child also render so now Parent1 component is rendered but this time Parent1 component will go to commit phase as well because there is a change in its props.value props and a result of changes in prop now props.children that is Child2 component also re-render but for this Child2 it will not go to commmit phase 

// 