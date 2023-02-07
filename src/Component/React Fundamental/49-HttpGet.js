
import React, { Component } from 'react'
import axios from 'axios'

export class HttpGet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
        postList : [],
        error:""

      }
    }

    async componentDidMount(){

       try {
           
        let List = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(List);

       this.setState({

           postList:List.data

       })

       } catch (error) {
           this.setState({
               error:"Error has been received"
           })
       }

       

    }

  render() {

    console.log(this.state);

    return (

      <>

         <h1>List of Posts</h1>
         {
             this.state.postList.length!=0 ?
             this.state.postList.map((post,index)=>{

                if(index<10){

                    return <li key={post.id}>the title is {post.title}</li>
                }else{
                    return null;
                }
  
               }) :
            
            <li>No Post available right now</li>
        
         }
         {this.state.error ? <li>{this.state.error}</li>:null}

      </>

    )

  }

}

export default HttpGet

// here to use axios we need endpoint for data which is json placeholder which have dummy data endpoint 