
import React, { Component } from 'react';

export class MountingChild extends Component {

    constructor(props) {
        super(props)
            
        this.state = {
                 
            name : "ACEY"
        }

       console.log("CHILD CONSTRUCTOR IS EXECUTED");
  
    }

    static getDerivedStateFromProps(Props,State){
                
        console.log("CHILD GetDerivedStateFromProps IS EXECUTED");
        
        return null  // returing null means state remain same as present in constructor
    }

  componentDidMount(){
         
    console.log("CHILD ComponentDidMount IS EXECUTEd");
          
  }

  render() {

    console.log("CHILD RENDER IS EXECUTED");

    return (

        <h3>MOUNTING CHILD COMPONENT {this.state.name}</h3>
    )

  }

}

export default MountingChild;
