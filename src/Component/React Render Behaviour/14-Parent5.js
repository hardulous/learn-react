
import React , {useState} from 'react'
import Child5 from './15-Child5';

const Parent5 = () => {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState('Aman');

  console.log("Parent5 Render")

  return (

    <>
       
      <h1>Incorrect Memo with Impure Component </h1>
      <h3>Parent5 Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count - {Count}</button>  
      
      <button onClick={()=>setName('Acey')}>Change Name - {Name}</button>

      <Child5 name={Name}/>

    </>

  )

}

export default Parent5
