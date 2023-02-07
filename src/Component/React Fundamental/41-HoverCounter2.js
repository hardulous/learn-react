import React, { Component } from 'react'

export class HoverCounter2 extends Component {


 render() {

    const { count , incrementCount } = this.props

    return (
      
        <>

          <h2 onMouseOver={incrementCount}>hovered {count}</h2>


        </>

    )

  }

}

export default HoverCounter2