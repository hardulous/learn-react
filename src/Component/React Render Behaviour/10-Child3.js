import React from 'react'

const Child3 = () => {

  console.log("Child3 Render")

  return (

    <>
    
      <h3>Child3 Component</h3>

    </>

  )

}

// export default Child3
export default React.memo(Child3);

// using react memo which is a HOC which wrap a component so that a component now only render if either its props and state changes and avoid if parent component render then not necessasry child component also render and gives performance boost and avoid UNNCESSARY RENDER

// here now if child3 component props and state does not change between the render then react will skip the rendering phase for this Child3 component and reuse the previous rendered output for this component and hence give performance boost 

// to make comparison for rendering as per our need we can pass 2nd argument to react memo which is a custom comparison function based on which rendering now take place 