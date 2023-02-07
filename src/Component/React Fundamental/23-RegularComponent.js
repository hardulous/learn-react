import React, { Component } from 'react';

export class RegularComponent extends Component {

  render() {

    console.log("Child Regular Component Component Rendered")

    return (

        <>
        
          <h1>Regular Component -{this.props.name}</h1>
        
        </>

    )

  }

}

export default RegularComponent;
