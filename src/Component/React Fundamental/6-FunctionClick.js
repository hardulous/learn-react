import React from 'react';

const FunctionClick =()=> {

    const clickHandler = ()=>{
        console.log("Button is Clicked");
    }

  return(

     <div>
         {/* but note event handler must be a function not a function call */}
        <button onClick={clickHandler}>Click Event Function</button>         
     </div>

  )

}

export default FunctionClick;

// NOTE: React Events are Camel case means first word lower and 2nd is uppercase unlike in js and html it is always lowercase