import React from 'react'

const Button = ( { children , handleClick } ) => {
   
 console.log(` Rendering Component button - ${children} `)

  return (

    <>
    
      <button onClick={handleClick}>

        {children}

      </button>
    
    </>

  )

}

// export default Button
export default React.memo(Button);