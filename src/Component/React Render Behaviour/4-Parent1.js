
import React , {useState} from 'react'
import Child1 from './5-Child1'

const Parent1 = () => {

  const [Count, setCount] = useState(0)

  console.log("Parent Render")

  return (

    <>

     
      <h1>Parent and Child Rendering Behaviour</h1>
      <h3>Parent Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count by 1 - {Count}</button>    
      
      <button onClick={()=>{setCount(0)}}>Same Count - {Count}</button>    

      <button onClick={()=>{setCount(5)}}>Increase Count by 5 - {Count}</button>    

      <Child1/>
      

    </>

  )

}

export default Parent1

// here first parent component is rendered then child component is rendered by default behaviour of react that is if parent component is getting rendered then all its child component also render.  

// case to see parent child render :

// 1. when new state is different from old state that is let say by clicking  on first button increment count by 1 that is when setter function is executed it makes parent component to re-render and if parent component is re-render then child component also get re-render 

// 2. when new state is same as the old state then we have 2 again two case:

// (a). if we call dispatch and setter function right after intial render but value of state remain same then both parent and child component does not get re-render 

// (b). if we call dispatch and setter function right after re-render is completed but value of state remain same then only parent componet re-render one more time but child components does not re-render again and then react bail out for subsequent state value

// same above case take place for useReducer state as well

// here what happening first start with component tree we have app , parent and child component nested below , when parent state setter function is called makes this parent component as flagged due to which react start traversing in component tree and look for flagged component , for flagged component react start its .createElement method for parent component but in parent component there is another child component as well so for this child another .createElement method is called even child component is not flagged and convert JSX into react elements and stored the rendered output , now this rendered output is compared with previous rendered output and as only changes is present in parent component not in child component so child component is discarded for changed and only parent component passed to commit phase which then mount changed to the DOM 

// So by above process it is clear that when we clicked on button parent component is rendered then child component is rendered but DOM node representing child component is never modified or updates means even child component is rendered when parent one is rendered but child only go to render phase but not to commit phase and this process in which component go to render phase only but not to commit phase is called UNNECESSARY RENDER , and due to this performance issue take place in app 
