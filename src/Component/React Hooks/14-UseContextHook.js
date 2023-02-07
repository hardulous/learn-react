
import React from 'react'
import ComponentA from './15-ComponentA'
import { UserContext , GoalContext } from './17-Context'

const UseContext = () => {

  return (

     <div id="PARENT">
     
        <h1>UseContext Hook</h1>
        
        {/* now Component A and its children component have access to both UserContext and GoalContext */}

        <UserContext.Provider value={{name:"AMAN",age:20}}>
          
          <GoalContext.Provider value={{mainGoal:"Ssc",secGoal:"Devloper"}}>

                <ComponentA/>

          </GoalContext.Provider>

        </UserContext.Provider>
 
     </div>    

  )

}

export default UseContext

// now lets say from this component i want to pass data directly to all its nested child component A and B without props drilling , so will use useContext hook

// 3 steps to use Context :

// 1. create the context first with any default value

// 2. provide this context with value by .Provider Component which have value attribute and this .Provider must wrap that component that component and child need that context data mention in value attribute 

// 3. final step is to consume this context by useContextHook() and value of context is determined in the way same as in class component that is value is equal to nearest .Provider method and if there is no Provider method then default value is used for context 

// The reason why useContext hook is better than .Consumer component as both used to consume context value is that if we are consuming multiple context value then first in order to provide multiple context value we have to use nested .Provider Component and to consume again have to use nested .Consumer Component which makes very much code , but this can be avoid by useContext() hook in which we dont need to perform any such nesting 
