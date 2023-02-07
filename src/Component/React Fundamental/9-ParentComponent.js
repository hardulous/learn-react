
import React, { Component } from 'react';
import ChildComponent from './10-ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
       
        parentName:"PARENT"
        
      }

      // since we are using this keyword in event handler method now have to bind this keyowrd
      this.greeParent = this.greeParent.bind(this);
       

    }

    greeParent(str){
        alert(`hello ${this.state.parentName} from ${str}`)
    }
    
  render() {

    return (

        <div>
            {/* sending method of parent to child */}
           <ChildComponent greet={this.greeParent}/>
        </div>

    )

  }

}

export default ParentComponent;
