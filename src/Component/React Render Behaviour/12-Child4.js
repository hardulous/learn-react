import React from 'react'

const Child4 = ( { children,name } ) => {

  console.log("Child4 Render")

  return (

    <>
    
      <h3>Child3 Component - {name}</h3>

      {children}


    </>

  )

}

export default React.memo(Child4);
 