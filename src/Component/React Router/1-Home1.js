import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Home1 = () => {

  console.log("Home1 Render");

  useEffect(()=>{

    return()=>{
      console.log("Home1 Unmounted")
    }

  },[])

  // here this useNavigate() hook is a function which return a function and just passsing any string url to that returned function as a argument react router navigate us to that url component 
  const navigate = useNavigate();
  
  const PlaceOrder = ()=>{

    // navigating to order-summary route , here by replace:true this Home1 component route will not be added to history stack
    navigate('order-summary',{replace:true});
  }

  return (
    
    <>
    

      <h1 id="h1">Home1 Component</h1>
      
      {/* here on clicking on this button we will navigate to order-summary routes */}
      <button onClick={PlaceOrder}>Place Order</button>


    </>

  )

}

export default Home1

// here what is happening when i click on navbar Home1 link then this component get mounted on DOM , means get render but if i click on About1 link then About1 component get mounted on dom but then this Home1 component get unmounted from the DOM

// here some time we navigate dont using clicking on links but after a task or lets say an event is completed then we procceed to different component routes

// lets take an example when we click on place order button we will navigate to order-summary component with the help of hook called useNavigate() hook which is provided by react-router 