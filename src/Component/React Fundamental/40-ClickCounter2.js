import React, { Component } from 'react'

export class ClickCounter2 extends Component {


 render() {

    const { count  , incrementCount } = this.props

    return (
      
        <>

          <button onClick={incrementCount}>pressed {count}</button>


        </>

    )

  }

}

export default ClickCounter2

// here both clickcounter and hovercounter contain same type of code so to share them using render props technique 