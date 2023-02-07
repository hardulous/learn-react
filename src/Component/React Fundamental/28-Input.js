import React, { Component } from 'react';

export class Input extends Component {

    constructor(props) {
      super(props)
    
       this.inputRef = React.createRef();

       this.state={
        name:'aman',
        class:12,
        rollNo:1
       }
    }

    // this functions is called from parent component using ref
    focusInput(){
        this.inputRef.current.focus();
    }

    consoleLog(){
        
        console.log("Hello");
    }

  render() {

    return (

        <>

          <input type="text" ref={this.inputRef} />
         
        </>

    )

  }
}

export default Input;

// it is possible using refs that methods of child component is accessible from ref of parent component but only if parent component is ref to a child component 