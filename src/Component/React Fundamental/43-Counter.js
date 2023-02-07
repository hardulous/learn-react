import React, { Component } from 'react'

export class Counter2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
        count:0
      }
    }

    incrementCount=()=>{

        this.setState((prevState)=>{

            return {
                count:prevState.count+1
            }
        })
    }


  render() {

    return (

      <>

        <div>
            {this.props.render(this.state.count,this.incrementCount)}
        </div>

      </>

    )

  }

}

export default Counter2

// this counter component is a container component where we will implement our common functionality that is state and incrementCount method , here this counter component will not render anything of its own but will render whatever is returned by this render() method which accept agument common functionality code that is state and method increment and based on that render ClickCounter2 and HoverCounter2 