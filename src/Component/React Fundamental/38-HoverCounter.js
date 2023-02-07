
import React, { Component } from 'react'

import withCounter from './39-withCounter'

export class HoverCounter extends Component {

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

    console.log("HOVER COUNTER COMPONNENT EXECUTE");
    const { count , incrementCount } = this.props

    console.log(this.props); 

    return (
      
        <>

          <h2 onMouseOver={incrementCount}>{this.props.name} with age {this.props.age} Hovered {count} Times</h2>

        </>

    )

  }
}

// export default HoverCounter
// now when exporting , export by calling that HOC function 
export default withCounter(HoverCounter,5);

// here this will show similar to clickcounter but will display number of hover instead of press , now lets say there will be about 100 of component with similar functionality and copy pasting same increment component is bad and for this we use high order component , although we can also defined increment function in parent  by passing them as props but lets say if component are not direct child so there is need to share common functionality btw component and for this we use HOC

// here now what we are doing basically instead of only exporting clickcounter and hovercounter we are expoting their HOC version which now by this both component will also contain name props as value Aman
