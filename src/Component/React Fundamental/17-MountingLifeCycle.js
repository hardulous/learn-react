
import React, { Component } from 'react';
import MountingChild from './18-MountingChild';

export class MountingLifeCycle extends Component {

    // 1st this will get executed 
    constructor(props) {
      super(props)
          
      this.state = {
                 
        name : "ACEY"
      }

     console.log("CONSTRUCTOR IS EXECUTED");

    }
      
    // 2nd this will get executed and after componentdidmount this will getExecuted again because stateVariable is changed in componentDidMount
    static getDerivedStateFromProps(Props,State){
              
        console.log("GetDerivedStateFromProps IS EXECUTED");
        console.log(State);

         if(Props.name==="ACEY"){
             return {
                name : Props.name
             }
        }else{
             return {
                 name: State.name
            }
        }
        
    }
      
    // at last this will get executed
    componentDidMount(){
       
       console.log("ComponentDidMount IS EXECUTEd");
       this.setState({
           name:"AMAN"
       }) 
    }
     
  // 3rd this will get executed 
  render() {

    console.log("RENDER IS EXECUTED");
    

    return (

        <>

        <h3 id="h3">MOUNTING THE COMPONENT {this.state.name}</h3>
        <MountingChild/>

        </>
    )

  }

}

export default MountingLifeCycle;

// ## MOUNTING LIFECYCLE METHODS

// 1. in this lifecycle stage first constructor() is executed and it is used to intilizing state and binding event handler to our class component but in constructor we should never make a side Effect like external api call and also have to call super() constructor of parent class , constructor is only place where u can directly create or change state otherwise u have to change it have to call this.setState() and this constructor method is executed only once 

// 2. 2nd method after constructor to execute is static getDerivedStateFromProps(Props,State) which is used to change state of component when state of component depends on props and state and as this method is static so we can not used this keyword here means no property like state and any variable and method we can access inside this method so in order to change state we simply return a object which represent new state of my component and again we should not perform any side Effect like external api call in this method , this method executed each time just before call to render() method take place

// 3. 3rd method is render() method which is used to create and render my component means creating html from JSX and entering my component in DOM , this is pure function means for given value of props and state it will always return same UI , again we should not change state of component here and making external API call m out of all method render is must must use method in class component and if any parent component is rendering its child component then first that child component lifeCycle method are executed before componentDidMount of parent Component 

// 4. final method is componentDidMount() method , this method is called only once during whole lifecycle of a component and invoked immedietly after a component and all its children component are rendered in the dom , this method is perfect place to perform side Effect like external API call and can interact with dom to modify it by selectors here if in componentDidMount state variable is changed then again getDerivedStateFromProps will be executed again

