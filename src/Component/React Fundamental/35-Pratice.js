
import React, { Component } from 'react'
import './36-pratice.css'

export class Practice extends Component {

    constructor(props) {
      super(props)
    
      this.state = {

         name:"aman"

      }
    }
    componentDidMount(){

        console.log("Component did mount")
    
        document.getElementById("h1").addEventListener('mouseover',()=>{
            
            document.getElementById("h1").style.cssText="animation-name: k1; animation-duration: 200ms;animation-fill-mode: forwards;"

        })
        document.getElementById("h1").addEventListener('mouseout',()=>{
            
            document.getElementById("h1").style.cssText+="    animation-name: k2; animation-duration: 200ms;animation-fill-mode: forwards;"
        })

    }

    changeState=()=>{
        this.setState({
            name:"acey"
        })
    }

    componentDidUpdate(){
        
        document.getElementById("h1").addEventListener("click",()=>{
            console.log("clicked");
        })
    }

  render() {
   
    console.log("render",this.state.name);
    return (

        <>
        
        <h1 id="h1" className='c1'>External event listner</h1>
        <button onClick={()=>{this.changeState()}}>change state</button>

        </>

    )

  }
}

export default Practice