
import React from "react";

// HOC WITH 2 ARGUMENT
const withCounter = (WrappedComponent,increment) =>{

    class WithCounter extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               
              count:0
            }
          }
      
          incrementCount=()=>{
      
              this.setState((prevState)=>{
      
                  return {
                      count:prevState.count+increment
                  }
              })
          }
       
        render(){
            
            console.log("HIGH ORDER COMPONNENT EXECUTE");
            console.log(this.props) // this will show all props passed to clickCounter and HoberCounter component from parent

            return <WrappedComponent 
            name="Aman" 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            {...this.props}  // here now all HOC component will also have props send to them from parent component 
            />

        }
    }

    return WithCounter

}

export default withCounter

// DEFINING AND RETURNING A HIGH ORDER COMPONENT:

// here what is happing basically this HOC method accept component as argument and return new version of that component with new props we can passed to them as name , count and method incrementCounter and all component which become HOC by this function will have access to all this props value

// here is the place where all props passed to HOC component will come first and from here we need to pass that props again to them