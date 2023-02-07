
import React , {useState} from 'react'
import Child4 from './12-Child4'
import ChildChild from './13-Child-Child';

const Parent4 = () => {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState('Aman');

  console.log("Parent4 Render")

  return (

    <>
       
      <h1>Incorrect Memo With Children</h1>
      <h3>Parent4 Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count - {Count}</button>  
      
      <button onClick={()=>setName('Acey')}>Change Name - {Name}</button>

      <Child4 name={Name}>

        {/* hello */}
        <ChildChild/>
        
      </Child4>  

    </>

  )

}

export default Parent4

// now to undertand Incorrect memo we have another child component nested inside Child4 Component

// here when u click on button on change name button name changes to Acey due to which both neseted Child4 or its child component and parent also re-render because prop name is passed to Child4 component , but when we click on button and update state count which is not getting used by Child4 component still all 3 component get re-rendered and no optimization take place this is because of props.children , in react props.children always return a new refrence due to which changes to props always take place and if changes to props take place then by react.memo re-render again take place , so never use react.memo() with the child component which is using props.children element.

// NOTE:: if props.children is text instead of any html or custom element then re-render does not take place 