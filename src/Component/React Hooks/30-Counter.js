import React from 'react'

const Counter = ( { text , count } ) => {

 console.log(` Rendering Component Counter - ${text} `)

  return (

    <>
    
      <div>{text} - {count}</div>

    </>

  )

}

// export default Counter
export default React.memo(Counter);