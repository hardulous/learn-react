import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const OrderSummary = () => {

  console.log("OrderSummary Render")
  
  useEffect(()=>{

    return()=>{

        console.log("OrderSummary Unmounted");
    }
  })
  
  const navigate = useNavigate();

  return (

    <>
    

      <h1>Order Confimred</h1>
      
      {/* by passing -1 value we are going back to just previous component in history statck of routes  */}
      <button onClick={()=>{navigate(-1)}}>Get Back To Home1</button>

    
    </>

  )

}

export default OrderSummary

// using useNavigate hook we will come to this component and also using same hook we will get back to previous Home1 component 

// here useNavigate hook take many type of argument , if we pass url string as argument then useNavigate navigate us to a component but if we pass a simple 1 or -1 number then it go to histroy stack and based on previous or forward already renderd component it will navigate us , and useNavigate also take 2nd argument that is object with property replace and if it is true then that component route will not be added to history stack means we can not get back to that component by doing this navigate(-1) 