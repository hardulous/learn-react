import React from 'react'

const Child6 = ( { name , person } ) => {

  console.log("Child6 Render")

  return (

    <>
    
      <h4>Child6 Componet - {name}</h4>

      <p> my name is {person.fname} {person.lname}</p>

    </>

  )

}

// export default Child6
export default React.memo(Child6);

// here now what is happening when we update any of state either Name and Count in parent component then even we have used memo in Child6 component still it gets re-render this is because of props person is an object which is passed to this Child5 component and as parent component re-render a new person reference object is created which is then passed to Child5 component and by react.memo() shallow comparison of previous person and new person object is false due to which re-render take place again , this case is not only for objects but also for arrays,functions as well.

// therefore if u are using reference type props in a component then avoid using React.memo()