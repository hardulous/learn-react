
import React, { Component } from 'react'

// applying HOC pattern
import withCounter from './39-withCounter'

export class ClickCounter extends Component {
  
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
         
    //     count:0
    //   }
    // }

    // incrementCount=()=>{

    //     this.setState((prevState)=>{

    //         return {
    //             count:prevState.count+1
    //         }
    //     })
    // }

  render() {

    // const {count} = this.state

    console.log("CLICK COUNTER COMPONNENT EXECUTE");
    const { count , incrementCount } = this.props

    console.log(this.props); 

    return (
      
        <>

          {/* <button onClick={this.incrementCount}>{this.props.name}   Click {count} times</button> */}

          <button onClick={incrementCount}>{this.props.name} with age {this.props.age}  Click {count} times</button>

        </>

    )

  }

}

// export default ClickCounter

// now when exporting , export by calling that HOC function with parameter component and incrementValue
export default withCounter(ClickCounter,10);

// here this component display number of count of press in button