
import React , {useState} from 'react'
import Child6 from './17-Child6'

const Parent6 = () => {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState('Aman');
  
  // here now we also pass object person as a prop to Child5 component to display on ui 
  const person = {
      fname:'super',
      lname:'man'
  }

  console.log("Parent6 Render")

  return (

    <>
       
      <h1>Incorrect Memo with Props Reference</h1>
      <h3>Parent6 Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count - {Count}</button>  
      
      <button onClick={()=>setName('Acey')}>Change Name - {Name}</button>
      
      <Child6 name={Name} person={person}/>

    </>

  )

}

export default Parent6
