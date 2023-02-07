import React, { Component , PureComponent } from 'react';
import PURECOMPONENT from './22-PureComponent';
import RegularComponent from './23-RegularComponent';

export class PARENTCOMPONENT extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Aman"
      }
    }

    componentDidMount(){
        setInterval(()=>{
          
            // here if name is different from Aman then PURE COMPONENT also get re-rendered for once because of Shallow comparison , and if we are sending props as an obejct then even value of name is same still because we are sending new object and refrence so by shallow comparison all component will perform re-render
            this.setState({
                name:"Aman"
            })

        },2000)
    }
    

  render() {
    
    console.log("Parent Component Rendered")

    return(

        <>
        
          <h1>Parent-Component</h1>

          <RegularComponent name={this.state.name}/>

          <PURECOMPONENT name={this.state.name}/>

        </>

    )

  }

}

export default PARENTCOMPONENT;

// here by above example we have set our state as name is Aman after for first time perform rendered as parent first then regular component child and at last pure component child is rendered and after that in parent we have changed state due to which component is rendered again but here all component is getting rendered again and again in 2 sec due to setInterval changing the state but PURE COMPONENT is never re-rendered again , this is because the Shallow Comparison of prevState and prevProp with currentState and props is true because original state.name is Aman and still when changing state value is still Aman means now PURE COMPONENT WILL NOT RENDER AGAIN 

// We should never make Parent as Pure Component because if parent doesnot get re-rendered then child also does not get re-rendered but if parent is re-rendered again then child component also re-rendered again even if their is no change in their value 