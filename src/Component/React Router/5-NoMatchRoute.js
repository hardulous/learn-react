import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const NoMatchRoute = () => {
  
  const navigate= useNavigate();

  useEffect(() => {
    
    document.getElementById('h1').style.cssText+='background-color:red;display:flex;justify-content:center;align-items:center'
  
    return () => {
      
       

    }
  }, []);
  

  return (

    <>
    

     <div id="h1">

        <h1>No Route matched for this</h1>
      
        <button onClick={()=>{navigate('/',{replace:true})}}>GO BACK TO HOME</button>

     </div>

  
    </>

  )

}

export default NoMatchRoute

// this component will be shown as a replacement of 404 no found and no match route case