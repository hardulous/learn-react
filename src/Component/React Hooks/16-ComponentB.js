
import React , {useContext} from 'react'
import { UserContext , GoalContext } from './17-Context'

const ComponentB = () => {

    // now instead of .Consumer Component we will use useContext() hook to consume value of context , which is a function which accept context as parameter and return context value 
    const User = useContext(UserContext);
    const Goal = useContext(GoalContext);

    console.log(User);
    console.log(Goal);
    
  return (

    <div id="CHILD-B">
    
       <h1>Component B</h1>

       <p>Hello my name is {User.name} and i am {User.age} yrs old . I want to acheive some goals in my life, my main goal is to crack {Goal.mainGoal} and secondary goal is {Goal.secGoal}</p>


    </div>

  )

}

export default ComponentB

// NOTE : we can use .Consumer and .Provider component in both class based and function based component but useContext() hook only in function based component 