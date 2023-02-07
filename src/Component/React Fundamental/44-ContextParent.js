
import React, { Component } from 'react'
import ContextChild1 from './45-ContextChild1'

// here have to import context whereever i am using it
import {UserProvider} from './47-userContext'
import { UserConsumer } from './47-userContext'

export class ContextParent extends Component {

  render() {

    return (

      <div className='parent'>
      
        <h4>ParentContext</h4>
        
        {/* here if there is not provider method then default context value will be used */}
        <UserConsumer>
            {
                ({name,age})=>{
                    
                    return <li>hello my name is {name} and i am {age} years old</li>
                }
            }
        </UserConsumer>

        {/* here context is available to this below component and its child component with default value here as i have used a provider method so default value of context will not be used now and now object with mentioned in value attribute is used */}
        <UserProvider value={{name:"aman",age:100}}>
            <ContextChild1/>
        </UserProvider>

      </div>

    )

  }

}

export default ContextParent

// here in main app component i have used contextparent component and here i have nested 2 child contextchild1 and contextchild2 and lets say from i want to passed some data from parent contextparent component to innermost child contextchild2 component so:

// 1. create the context
// 2. provide the context value
// 3. consume the context value to the component whose childcomponent and that component need that context value 