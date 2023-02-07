
import React, { Component } from 'react';


class Message extends Component {

    name = "AMAN";
    // to create state for class always create in constructor or intlisied any value
    constructor(){
        super()    // it is imp to call because of inherit by base class Component 
        
        // state object
        this.state = {

            message:`Welcome visitors by ${this.name}`
        }

    }

    // to handle changes message
    changeMessage(){

        // her this setState is function which can change state object of class component , state variable of class can only be changed by this function setState and whatever object u passed to this method your state become equal to that object 
        this.setState({

            message:`Thank You For Subscribing ${this.name}`,
        })
    }

  render() {
    
    const age=23; // have to use const because now variable is created inside function render() not class 

    return (

      <div>

         <h1>{this.state.message?this.state.message:"Welcome Visitors"}</h1>

         <h2>{age}</h2> {/* as age is variable of function so no need to use this keyword here */}
         
         {/* handling onClick event */}
         <button onClick={()=>this.changeMessage()}>Pls Subscribe</button>

      </div>

    )

  }

}

export default Message;

// state in class component is always created inside constructor and similar to in a function or code we create variable for use and similarly for need of component we create state variable which is always a object in class which can store any key-value pair , to bind this means allow our class component to use state we use again this.state keyword

// when creating any variable or function in class component no need to write var,let,const simply give name and use by keyword this but inside render method do use let,var etc keyword