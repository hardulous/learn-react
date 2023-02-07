import React, { Component } from 'react';

export class EventBind extends Component {
  
    constructor(){

        super()
        this.state={
            message:"HELLO"
        }
        
        // 3rd way to bind event handler , this binding happens only once in a constructor 
        
        // this.clickHanlder=this.clickHanlder.bind(this);
       
    }

    clickHanlder(){

        console.log(this);

        this.setState({
            message:"GOOD BUY"
        })
       
    }

  render() {

    return (

        <div>
            <h4>{this.state.message}</h4>

            {/* here now this inside clickHandler will refer to this of inside bind() method which is nothing but instance of class component , this is 1st way to bind method */}

            {/* <button onClick={this.clickHanlder.bind(this)}>Click Event Bind</button> */}
            
            <button onClick={()=>{this.clickHanlder()}}>Click Event Bind</button>

            {/* <button onClick={this.clickHanlder}>Click Event Bind</button> */}

        </div>

    )

  }

}

export default EventBind;

// TO KNOW EVENT BINDING GO TO https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

// MUST , MUST MUST MUST WATCH ABOVE WEBISTE CONTENT ITS CRISTAL CLEAR

// there are 2 way to bind 1st bind inside render method and 2nd to use arrow function , and 3rd official react appraoch is to bind event handler in constructor , and last approch is to use arrow event handler function but if we are using simple function then we have to bind that event hadnler function to our component instance that is this keyword

// but always use approch either 3rd and 4th as per react documentation to avoid any error if their is nested child to render again