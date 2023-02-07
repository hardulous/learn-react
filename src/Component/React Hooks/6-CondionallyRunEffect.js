import React, { useState , useEffect } from 'react'

const ConditionallyRunEffect = () => {

    const [Count, setCount] = useState(0);
    const [Name, setName] = useState('')

    // Conditionally run UseEffect hook ,here previosuly even if count is not getting changed but i am changing input name due to which component is rendered again as a result useEffect is executed again and again which is unnecssary , but now by 2nd parameter dependency arraylist in which just passed those props and state variable whose value whenever get changed then this useEffet hook will be executed again  
    useEffect(() => {
      
        console.log("UseEffect is executed")
        document.getElementById('btn-2').innerText = `Clicked ${Count} times`;

    } , [Count] );
    

  return (
    
    <>

      <h1>Conditionally Run Effect</h1>

      <input type="text" value={Name} onChange={(e)=>{

          setName(e.target.value);

      }}/>

      <button id="btn-2" onClick={()=>{

          setCount((prevState)=>{
              return prevState+1;
          })

      }}>increment count</button>

    </>

  )

}

export default ConditionallyRunEffect

// here executing useEffect hook each time component is rendered can cause performance heavy task and make app slow , so in same cases we need to execute useEffect hook based on condition  

// here previously in class component to execute componentDidUpdate based on condition we pass 2 parameter to componentDidUpdate that is (prevState,prevProps) and based on checking either prevProps.property === Props.property and prevState.property === State.property will execute the componentDidUpdate otherwise will not execute it . this is very imp because if we dont do this then after each render componentDidUpdate will get executed 

// to acheive same functionality in function component we use dependency array list in useEffect Hook as 2nd argument 