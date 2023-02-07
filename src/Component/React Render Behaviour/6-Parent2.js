
import React , {useState} from 'react'
import Child2 from './7-Child2'

const Parent2 = ({children,value}) => {

  const [Count, setCount] = useState(0)

  console.log("Parent2 Render")

  return (

    <>
       
      <h1>Same Element Reference</h1>
      <h3>Parent2 Component</h3>

      <h3>From GrandParent value - {value}</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count by 1 - {Count}</button>    
        
      {/* <Child2/> */}
      {/* here this children is Child2 component which is passed to this Parent2 component */}
      {children}

    </>

  )

}

export default Parent2

// here see when we click on button count state is increased which make this parent2 component flag as a result this parent2 component re-render but child component also re-render , but child component did not make to commit phase as a result this is UNNCESSARY RENDERING and to avoid this ::

// make this child component as props and by props.children we can access it as a component and now when we update the count value this will re-render parent component but now will not render child component again because :

// here we have app component which contain parent2 component and with prop child2 component when we click on button setter function is called which makes this parent2 component flag so then react come to this flagged component and react see this children props as part of JSX and this children props is refering to Child2 component and as fundamental of react a component can change its state but can never change its props direclty so react know that props.children will be never changed so when jsx is converted to react element react will use same react element for this props.children that is one during initial rendering and this is how Child2 component will be never rendered again 

// that is how react assuring that the children props has to be referencing the same element from the previous render will skip the render phase for Child2 component 

// but note that if a component has given some sort of props by parent which is getting changed then that child component will also re-render 