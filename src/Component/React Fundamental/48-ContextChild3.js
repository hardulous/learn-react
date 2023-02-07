
import React, { Component } from 'react'
import UserContext from './47-userContext'

export class ContextChild3 extends Component {

  componentDidMount(){

    console.log(`Component did mount using context with`,this.context);
    console.log(this);
  }

  render() {

    return (

      <div className='child-3'>

       <h4>ContextChild-3</h4>
       <li>helli my name is {this.context.name} and i am {this.context.age} years old</li>

      </div>

    )

  }

}

// syntax for context type property , and now my context is available to render by property this.context 
ContextChild3.contextType = UserContext

export default ContextChild3

// there is another way by which we can access context instead of using Consumer method which is context type property 

// and value of context by this method again depend on nearest provider method and if there is no provider method default value will be used

// althogh it is more easy then consumer component syntax but there are 2 limitations

// 1. it only work with class component
// 2. consuming context by this method will allow only one context can be used at a time and can not use multiple context at same time and some time we need more than one context which can be done only by Consumer method
// 3. but one advantage of using context with contextType method is that if u want to access this context value outside render method or in any lifecycle method then we can use it with this.context