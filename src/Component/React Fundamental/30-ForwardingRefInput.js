import React, { useEffect } from 'react';

// function ForwardingRefInput() {
 
//   return (

//     <>

//       <input type="text"/>

//     </>

//   )

// }

// the function based component can not use ref attributre direclty because instance of function is never created , but can use if we create a function component using React.forwarRef( (props,ref)=>{ return () } ) which accept a callBack function which accept props passed to this function component and ref which is passed to it by parent component that is this.inputRef and return a JSX 

const ForwardingRefInput = React.forwardRef((props,Parentref)=>{
   
   useEffect(()=>{
    // here this will point to input tag
    console.log(Parentref);
   });

    return(

        <>

         {/* here this ref attribute contain Parentref which we got from parent component which is nothing but this.inputRef so when we pressing button in parent component it will do this.inputRef.current.focus which in turn will execute this.inputRef.current.focus of this below input tag in which i am refering to */}
         <input type="text" ref={Parentref}/>

        </>

    )
})

export default ForwardingRefInput;
