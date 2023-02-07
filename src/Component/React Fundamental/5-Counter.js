
import React, { Component } from 'react';


class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      
      counter:0,

    }
  }
  
  // handle increment 
  increment(){

    // here if u change state object without setState() method then evenThough value get changed by looking at console but it will not trigger re-rendering means UI will not get updated

    // this.state.counter+=1;

    // this.setState({
      
    //   counter:this.state.counter+1

    // }, ()=>console.log("callback-value" ,this.state.counter) )
    
    // here this will solve problem of avoiding multiple setState() call in one go , here still this setState execute in one go but will now have last call value which is 5
    this.setState( (prevState,props)=> ({

      counter:prevState.counter+1 
      
    }),()=>{console.log('callback-value',this.state.counter)})

    // not that in conslode even if setState executin before console.log but still previous state value is shown because setState() is async function 

    console.log(this.state.counter)
    
  }

  incrementFive(){

    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {

    
  // destructuring state , now if changes is been made to state variable means changes is made to counter variable and now where ever this counter variable is getting used will triger re-renderz
  const { counter } = this.state

    return(

        <div>

          <h1>Counter</h1>

          {`Count-${counter}`}

          <button onClick={()=>{this.increment()}}>Increment by One</button>
          
          {/* here when click on below button u will see 5 log with 0 value and 5 with 1 value this is because REACT always group multiple setState call into single call because setState is asyn function and due to event loop it will get execute at last , for better performance , now all 5 setState call are done in single go and updated value does not carry over btw different call , therefore whenever we update state based on previous state we always passed function as parameter to setState and that function have access to previous state always and props as well if new state dependent on props also*/}

          <button onClick={()=>{this.incrementFive()}}>Increment by Five</button>

        </div>
        
    )

  }

}

export default Counter;

// never modified state directly instead always setState() method else react will not re-render the UI , whenever state of a component get changed the react render the component again based on new value of state , here in class component setState() is asyn function and theer might be the case when u need to perform task only after your state is set again in this case setState() method will take another parameter which is callback function which get execute only after state is set again

// let say now when clicking on button my counter is update 5 times 