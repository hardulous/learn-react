import React, { Component } from 'react';

export class FormHandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
         username:"",
         message:"",
         topic:"react"
      }
    }

    handleUserNameChange = (e)=>{

        console.log(e.target)

        this.setState({
            
            username:e.target.value  // here now whatevenr is value of input tag your state variable username become equal to that
        })
    }

    handleMessageChange =(e)=>{

        console.log(e.target)
         
        this.setState({

            message:e.target.value
        })
    }

    handleTopicChange = (e)=>{

        console.log(e.target);

        this.setState({

            topic:e.target.value
        })
    }

    // this will execute when we submit the form 
    handleSubmit = (e)=>{

        e.preventDefault();
        alert(`Form has been submitted with VALUE: ${this.state.username} ${this.state.message} ${this.state.topic}`)
        this.setState({
            username:"",
            message:"",
            topic:"react"
        })
    }
    
 
  render() {

    console.log(this.state);

    return (

        <>
        
          <form onSubmit={this.handleSubmit}>

              <h1>FORM HANDLING</h1>

              <label htmlFor="username">UserName</label>
              <input type="text" id="username" placeholder='UserName' value={this.state.username} onChange={this.handleUserNameChange}/>

              <label htmlFor='message'>Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' value={this.state.message} onChange={this.handleMessageChange}></textarea>

              <label htmlFor="select">Topics</label>
              <select name="select" id="select" value={this.state.topic} onChange={this.handleTopicChange}>
                  <option value="react">react</option>
                  <option value="angular">angular</option>
                  <option value="vue">vue</option>
              </select>

              <button type='submit'>SUBMIT FORM</button>

          </form>

        </>
    )

  }
}

export default FormHandling;

// TO MAKE A COMPONENT CONTROLLED COMPONENT WE NEED TO FOLLOW 2 STEPS:

// 1. first make a state variable which is used as value for controlled component

// 2. give value attribute of controlled component as value of state variable part like this.state.username , and now your input element is getting controlled by react and to change any value means changing state of component because input tag value is part of state variable so we need to pass another attribute called onChange inside this onChange u can call setState to change value of state because state can not be directly changed