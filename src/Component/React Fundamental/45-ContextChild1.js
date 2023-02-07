
import React, { Component } from 'react'
import ContextChild2 from './46-ContextChild2'
import { UserConsumer, UserProvider } from './47-userContext'

export class ContextChild1 extends Component {

  render() {

    return (

      <div className='child-1'>
      
        <h4>ContextChild-1</h4>
        <UserConsumer>
            {
                ({name,age})=>{
                    
                    return <li>hello my name is {name} and i am {age} years old</li>
                }
            }
        </UserConsumer>

        <UserProvider value={{name:"Acey",age:"50",sport:'pubg'}}>

           <ContextChild2/>

        </UserProvider>

      </div>

    )

  }

}

export default ContextChild1