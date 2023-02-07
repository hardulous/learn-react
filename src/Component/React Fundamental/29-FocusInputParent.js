import React, { Component } from 'react';
import Input from './28-Input';

export class FocusInputParent extends Component {

    constructor(props) {
      super(props)
    
      this.parentRef = React.createRef();
    }
    
    focusInput=()=>{
       
        // here accessing method of child component using ref
        this.parentRef.current.focusInput();
        this.parentRef.current.consoleLog();
    }

    componentDidMount(){
        // this will show child component we are pointing to
        console.log(this.parentRef.current);
    }

  render() {

    return (

        <>
          
          {/* here this input also have it own ref and now on parent we have given this input a ref so now this whole input class component methods and property are accessible from this parent this.parentRef  */}
          <Input ref={this.parentRef}/>

          {/* when we press this below button the child input element should receive the focus */}
          <button onClick={this.focusInput}>Focus Input</button>

        </>

    )

  }

}

export default FocusInputParent;
