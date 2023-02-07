import React, { Component } from 'react';
import UpdatingChild from './20-UpdatingChild';

export class UpdatingLifeCyle extends Component {

    constructor(props) {
        super(props)
            
        this.state = {
                 
            name : "ACEY"
        }
       
       console.log("Constructor is executed");
       this.ChangeState=this.ChangeState.bind(this);
  
    }

    ChangeState (){
        this.setState({
            name:"AMAN"
        })
    }

    static getDerivedStateFromProps(Props,State){
        
        console.log(State);
        console.log("GetDerivedStateFromProps is executed");
        
        return null
    }

  componentDidMount(){
         
    console.log("ComponentDidMount is executed");
    
  }

  shouldComponentUpdate(nextProps,nextState){
      console.log(nextState);
      console.log("ShouldComponentUpdate is executed")
      return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate is executed")
      return null;
  }

  componentDidUpdate(prevProps,prevState,snapShot){
      console.log("componentDidUpdate is executed")
  }

  render() {

    console.log("Render is executed");

    return (
        
        <>

        <h3>UPDATING COMPONENT PARENT -{this.state.name}</h3>
        <UpdatingChild />
        <button onClick={this.ChangeState}>Change State</button>

        </>
    )

  }

}

export default UpdatingLifeCyle;

// HERE Component is re-rendered because of changes in props or state of the component , we have 5 methods out of 3 rarely used and some common in Mounting lifeCyle as well

// 1. static getDerivedStateFromProps(props,state) it will execute each time just before component is about to re-rendered again and state is changed by setState()

// 2. ShouldComponentDidUpdate(nextProps,nextState) , it is a method which accept updated and modified props and state and return either true and false value based on some conditions which if true then component is rendered again if false then component will not be rendered again , and default value is true always , we should again not do any side Effect in this method 

// 3. render() method is also present in this UPDATING stage which convert JSX and enter component inside DOM 

// 4. getSnapshotBeforeUpdate(prevProps,prevState) , this method accept previous props and state and it is called just before update of dom take place but after render method , this method can be used to interact and make changes to DOM by selectors ,this method either return null and a value and returned value is passed as 3rd parameter to componentDidUpdate() 

// 5. componentDidUpdate() , this method is called after component and its child component is re-rendered again , this method accpet 3 parameter ( prevProps,prevState,snapshot) here snapShot is whatever result is returned by method getSnapshotBeforeUpdate() , this method is guaranted to be called in each re-render cycle so we can do side Effect  , but before making AJAX call and changing state we should compare prevState with newState and then decide wheter need to makje call or not else it will result in endless loops of re-rendering  