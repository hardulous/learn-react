import React, { Component } from 'react'

export class User extends Component {

  render() {

    return (

        // even render name is override still can use it no error 
      <div>{this.props.render(true)}</div>

    )

  }
}

export default User

// here from parent component we have sent prop render which is a arrow function which accept true or falsee and based on value we will control what to display on UI 