
import React, { Component } from 'react';


class ClassClick extends Component {

  render() {

    const clickHandler = ()=>{
        console.log("Button is Clicked");
    }

    return (

        <div>
            <button onClick={clickHandler}>Click Event Class</button>
        </div>

    )

  }

}

export default ClassClick;

// here note that if function or variable is defined inside render method then no need to use this keyword to use them can directly use but if they are outside render method then u have to use this keyword to access them 