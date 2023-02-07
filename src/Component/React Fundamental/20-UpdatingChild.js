
import React, { Component } from 'react';

export class UpdatingChild extends Component {

    constructor(props) {
        super(props)
            
        this.state = {
                 
            name : ""
        }
       
       console.log("child Constructor is executed");
  
    }

    static getDerivedStateFromProps(Props,State){
                
        console.log("child GetDerivedStateFromProps is executed");
        
        return null
    }

  componentDidMount(){
         
    console.log("child ComponentDidMount is executed");
    
  }

  shouldComponentUpdate(){
      console.log("child ShouldComponentUpdate is executed")
      return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("child getSnapshotBeforeUpdate is executed")
      return null;
  }

  componentDidUpdate(prevProps,prevState,snapShot){
      console.log("child componentDidUpdate is executed")
  }

  render() {

    console.log("child Render is executed");

    return (

        <h3>UPDATING COMPONENT CHILD</h3>
    )

  }

}

export default UpdatingChild;
