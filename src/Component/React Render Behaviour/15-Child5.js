import React from 'react'

const Child5 = ({name}) => {

  console.log("Child5 Render")

  const data = new Date();

  return (

    <>
    

      <h4>Child5 Component - {name}</h4>
      <h5>Time is {data.getHours()} {data.getMinutes()} {data.getSeconds()}</h5>
    
    
    </>

  )
}

// export default Child5
export default React.memo(Child5);

// here my child5 component instead of name also display current time.

// here but this opitmization is wrong because i want to display updated time to be shown but here value of time is taken from the time this child5 component is rendered and after that it remain same as long as this child5 component is rendered again , we should never use memo for impure Component and this Child5 is an impure component , a component is called impure component if its JSX can be changed even if its props and state does not change that is date in this component 