import React, { Component } from 'react';

export class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
   
    // if any error come then this method is executed and return a new state and as soon as state is changed this component will render again but now this time will show fall-back ui
    static getDerivedStateFromError(error){
      
      console.log("get derived state from error");
      return{
          hasError:true
      }
    }

    // this method is generally to log errors in screen
    componentDidCatch(error,info){
        
        console.log("component did catch");
        console.log(error);
        console.log(info);
    }   

  render() {

    return (

        // here if any error come while mounting this component then it will show text otherwise it will show whole component with children , but in development error will be still shown because of development reason by react-teams , but in production error will not be shown  
        <>

          {this.state.hasError ? 
          
            <h1>Something went wrong</h1> :

            this.props.children
            
          }

        </>

    )

  }

}

export default ErrorBoundary;

// here there is a problem with error boundary is that if there is error in any of hero component then whole component inside errorBoundary will be hidden and fallBack ui will be shown but lets say if we have e-commerce site in which we display 1000 products and if there is error in one products then hidding 999 products , similary here if error is in 3rd hero Component then why hidding other 2 hero Component 

// to avoid above problem we can wrap our each hero Component in errorBoundary 