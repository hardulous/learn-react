
import React from 'react';


const Greet = (props) => {
 
  // 2 way to destrucutre either destrucutre in parameter like ex 1st :
  // const Greet = ( { name } ) = >{ }

  // 2nd way to destrucure in function body
  const {name} = props;
  console.log(name);

  console.log(props);

  return(

    <>
    
       <div>

         {props.name?`hello ${props.name}`:"hello aman"}

       </div>
       {props.children}

    </>
  )
  

};

export default Greet;

// here to insist React to evaluate jsx expression is done by wrapping expression in {} curly braces and inside this {} u can write any javascript 
