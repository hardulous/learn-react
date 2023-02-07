
import React from 'react'

const Child7 = ( { name , person , handleClick} ) => {

  console.log("Child7 Render")

  return (

    <>
    

      <h4>Child7 Componet - {name}</h4>

      <p> my name is {person.fname} {person.lname}</p>

      {handleClick()}

    </>

  )

}

export default React.memo(Child7);

