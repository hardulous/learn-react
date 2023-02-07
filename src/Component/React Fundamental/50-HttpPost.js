
import React, { Component } from 'react'
import axios from 'axios';

export class HttpPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
      
        userId:"",
        title:"",
        body:""
      }
    }

    handleChange =(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{

        e.preventDefault();
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))

        // here fetch api contain response.json() but axios contain response.data
    }

  render() {

    const {userId,title,body} = this.state;

    return (

      <>
      
        <div>

            <form action="" onSubmit={this.handleSubmit}>

                <div>
                    <label htmlFor="userId">UserId</label>
                    <input type="text" id="userId" name="userId"  value={userId} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="body">body</label>
                    <input type="text" id="body" name="body" value={body} onChange={this.handleChange}/>
                </div>

                <button type='submit'>Post Request Start</button>

            </form>

        </div>        

      </>

    )

  }

}

export default HttpPost