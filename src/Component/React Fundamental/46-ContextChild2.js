
import React, { Component } from 'react'

// here to consume or use Context value we have to import Consumer Component of context we have created
import {UserConsumer} from './47-userContext'
import ContextChild3 from './48-ContextChild3'

export class ContextChild2 extends Component {

  render() {

    return (

      <div className='child-2'>
      
        <h4>ContextChild-2</h4>
        {/* here in order to use Context value we have .Consumer method of method in which in-between we specify a function which accept value attribute we passed in .Prvoider method of context and return some JSX but note that in between this .Consumer method there can be only this function and apart from this even a white space will show error , because A context consumer expects a single child that is a function.*/}
        <UserConsumer>
            {
                ({name,age,sport})=>{
                    
                  console.log(name,age,sport);

                    return <li>hello my name is {name} and i am {age} years old and i love to play {sport}</li>
                }
            } 
        </UserConsumer>

        {/* Consumer Type Property */}
        <ContextChild3/>

      </div>
    )

  }

}

export default ContextChild2

// here even i have used provider in contextParent so both contextchild1 and contextchild2 have access to value attribute but then i again used provider with new value in contextchild1 so now as when using context the nearest provider method value attribute is used so now this contextchild2 component will use 2nd provider method 
