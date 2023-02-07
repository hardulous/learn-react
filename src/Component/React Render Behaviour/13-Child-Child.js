import React from 'react'

const ChildChild = () => {

  console.log("Child4 Child Render");

  return (

    <>
    

       <h4>Nested Child of Child4</h4>


    </>

  )

}

export default ChildChild

// there is not memo for this component so if its parent Child4 component re-render then this component also re-render