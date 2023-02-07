import React, { Component } from 'react';
import ForwardingRefInput from './30-ForwardingRefInput';

export class ForwardRefParent extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
    
    clickHandler = ()=>{
        // this is executing focus of child input tag
        this.inputRef.current.focus();
    }

    componentDidMount(){
        // here this will point to input tag of child component
        console.log(this.inputRef)
    }

  render() {
     

    return (

        <>

          <ForwardingRefInput ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Focus-Input</button>

        </>

    )

  }

}

export default ForwardRefParent;

// Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child. here we have passed this.inputRef to child component ForwardingRefInput and there we are assigning this ref to input tag , bascially this techinque used for function based component