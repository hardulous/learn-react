import React, { Component } from 'react';

export class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      // 1st way of creating a ref 
      this.inputRef = React.createRef();

      // 2nd way of creating a ref is by callback refs
      this.callbackRef = null;
      this.setCallbackRef = (element)=>{
          this.callbackRef = element;
      }

    }
    
    componentDidMount(){
        
        // 1st ref
        console.log(this.inputRef);
        // this.inputRef.current.focus()
      
        // 2nd ref , but also need to check wheter dom element exist or not because of mount or unmount reason
        if(this.callbackRef){
            console.log(this.callbackRef);
            this.callbackRef.focus();
        }

    }

    clickHandler=()=>{

        // 1st ref
        console.log(this.inputRef.current.value);

        // 2nd ref
        console.log(this.callbackRef.value);
    }

  render() {

    return (

        <>

          {/* because of ref attribute now this.inputRef is holding this input element */}
          <input type="text" ref={this.inputRef} />

          {/* using callbackRefs */}
          <input type="text" ref={this.setCallbackRef} />
          <button onClick={this.clickHandler}>Click</button>

        </>

    )

  }

}

export default RefsDemo;

// to access this input element directly using Refs ,

// 1st way is to make your created ref variable point to dom just passed ref attribute to that DOM element and inside just give name of your variable as value and now property , this.inputRef.current points out to your dom element 

// 2nd way is to create to first create a property and variable with value null and a method for that property which will set a dom element point to that property by passing that method as ref attribute to that DOM element and in this approach that dom element is directly accessible by this.callbackRef and no need to add .current property here , but note when accessing dom by this callbackRef react will call this.setCallbackRef with dom element when a component is mount and call it will null when component unmount so always check wheter value of dom element exist or not 