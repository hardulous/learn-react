import React ,{useState} from 'react'

const UseStateHookWithArray = () => {

  const [items, setitems] = useState([])

  const addItems = ()=>{
    
    // here as setItems() will not merge the state automatically so have to do by spread operator and adding new object in array 
    setitems([...items,{

      id:items.length,
      value:Math.floor(Math.random()*10) + 1

    }])
  }

  return (

    <>
    
     <h1>ITEMS:</h1>
     <button onClick={addItems}>add a number</button>

     <ul>
       {
         items.map((item)=>{

          return <li key={item.id}>{item.value}</li>

         })
       }
     </ul>

    </>

  )

}

export default  UseStateHookWithArray