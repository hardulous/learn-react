
import React, { Component , PureComponent } from 'react';
import MemoComponent from './25-MemoComponent';

export class MemoParent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Aman"
      }
    }

    componentDidMount(){
        setInterval(()=>{
          
            this.setState({
                name:"Acey"
            })

        },2000)
    }
    

  render() {
    
    console.log("Parent Memo Component is Rendered")

    return(

        <>
        
          <h1>Parent Memo Component</h1>
          <MemoComponent name={this.state.name}/>

        </>

    )

  }

}

export default MemoParent;
