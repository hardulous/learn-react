
import React , {useState} from 'react'
import Child3 from './10-Child3'

const Parent3 = () => {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState('Aman');

  console.log("Parent3 Render")

  return (

    <>
       
      <h1>React Memo</h1>
      <h3>Parent3 Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count - {Count}</button>  
      
      <button onClick={()=>setName('Acey')}>Change Name - {Name}</button>

      <Child3 name={Name}/>  

    </>

  )

}

export default Parent3

// here what happening as any of 2 state changed then parent render due to which child also render , so far we think that a component render either changes in props value and changes in state but component not render because of changes in props value but in fact child component render because its parent component render and its proof is that if u remove props name from child3 component and change the state still child3 component render , react does not care wheter props change it will render child component if its parent render 

// here for optimization that is to avoid UNNECESSAY RENDERING we use React.Memo. by this we can tell react that it should render a component only if that component props and state change by shallow comparison 
