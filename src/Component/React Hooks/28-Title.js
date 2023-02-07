
import React from 'react'

const Title = () => {
 
 console.log(` Rendering Component Title`)

  return (

    <>
    
      <h1>UseCallback Hook</h1>
    
    </>
  )

}

// export default Title
export default React.memo(Title);