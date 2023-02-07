import React, { Component } from 'react';

export class UserGreeting extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true,
      }
    }
    

  render() {
     
    //####### 1st way of conditional rendering if/else ############

    // if(this.state.isLoggedIn){
    //     return (
    //         <div> 
    //           <h2>WELCOME AMAN BISHT</h2>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div> 
    //           <h2>WELCOME GUESTS</h2>
    //         </div>
    //     )
    // }
    // #############################################################

    // ##### 2nd way is to create variable which hold JSX ##########

    // let message;
    // if(this.state.isLoggedIn){
    //     message=<div> 
    //               <h2>WELCOME AMAN BISHT</h2>
    //             </div>
    // }
    // else{
    //     message=<div> 
    //               <h2>WELCOME GUESTS</h2>
    //             </div>
    // }

    // return(
    //     message
    // )
    // ###########################################################

    // ##### 3rd way is to use ternary operator #################

    // return this.state.isLoggedIn ? (

    //        <div> 
    //          <h2>WELCOME AMAN BISHT</h2>
    //        </div>

    //     )  :

    //     (
          
    //       <div> 
    //         <h2>WELCOME GUESTS</h2>
    //       </div>

    //     )
    // #############################################################

    //#########3 4th way is to use short circuit method in which either show someting or show nothing ###################

    return (
        
      this.state.isLoggedIn &&  <div> 
                                  <h2>WELCOME AMAN BISHT</h2>
                                </div>

    )
    
    // ################################################################
    
  }

}

export default UserGreeting;

// lets say message to be conditionally rendered means if logged in is true we will show WELCOME AMAN BISHT and if false then we will render WELCOME GUESTS

// 1. if/else can not work inside JSX that is inside return statement because jsx is just a suntactic sugar which used for html and javascript creation so have to use entire return statement inside if/else

// 2. we can use element variable apprach in which you use js variable to store JSX it will help u conditionally render component

// 3. we can use ternary operator and its benifit is it can be used inside JSX and return statemenet as well 

// 4. we can use also short circuit method as well