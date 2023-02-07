
import React , {useState,useMemo,useCallback} from 'react'
import Child7 from './19-Child7'

const Parent7 = () => {

  const [Count, setCount] = useState(0)
  const [Name, setName] = useState('Aman');

  const person = {
      fname:'Aman',
      lname:'Singh Bisht'
  }

  // useMemo object 
  const MemoPerson = useMemo(()=>{

     return person

  } , [] )  // here MemoPerson will refer to same object person always after first render and if this component is render again still this MemoPerson will refer to same object , means now if this MemoPerson is send as props to Child7 component then Child7 component will not re-render as this time props reference is same if parent component render, and same case for array type props

  const handleClick = ()=> 'I am Memoized Function'
  
  const MemohandleClick = useCallback(handleClick,[])
  // here this MemohandleClick will now refer to this handleClick after first render as dependency list is empty means if this parent component is rendered again still this MemohandleClick will refer to this handlClcik function so if i send this MemohandleClick as a props to child component then child component will not re-render if parent component render again 
  

  console.log("Parent7 Render")

  return (

    <>
       
      <h1>useMemo and useCallback</h1>
      <h3>Parent7 Component</h3>

      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count - {Count}</button>  
      
      <button onClick={()=>setName('Acey')}>Change Name - {Name}</button>
      
      {/* sending memoized version of object and function as props to not triggre re-render  */}
      <Child7 name={Name} person={MemoPerson} handleClick={MemohandleClick}/>

    </>

  )

}

export default Parent7

// here now fixing the memoization done by react memo so that when sending props as reference type will no trigger re-render

// by above code now between re-renders new object and function reference will not be created as a result shallow comparison done by React.Memo() in child component will be always TRUE so will not trigger re-render 