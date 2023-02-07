
import React, { Component } from 'react';


class ClassWelcome extends Component {
  
  render() {
   
    // in class component we always destrucutre props and state inside render() method ex:

    const {name} = this.props;
    console.log(name);

    return (

      <div>

          {this.props.name?`welcome ${this.props.name}`:"Welcome"}

          {this.props.children}
    
      </div>

    )

  }

}

export default ClassWelcome;

// props in class component are accessible only by this.props which is reserved in class component 
