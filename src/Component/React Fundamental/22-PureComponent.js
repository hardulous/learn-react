import React, { PureComponent } from 'react';

export class PURECOMPONENT extends PureComponent {

  render() {

    console.log("Child Pure Component Rendered")

    return (

        <>

          <h1>Pure Component - {this.props.name}</h1>

        </>

    )

  }
}

export default PURECOMPONENT;

// snippet to create Pure Component is rpce

// the difference btw Component class and Pure Component class of react is that :

// The re-rendered method of PURE COMPONENT depends on Shallow comparison of both props and state because the Pure Components implements the  shouldComponentDidUpdate method with shallow prop and state comparision and if shallow comparison of either of prevState with currentState and prevProp with currentProp is false then it will re-rendered again otherwise will not re-rendered again , and on the other hand the simple Component the shouldCompondnetDidUpdate default return true value means always re-rendered again

// here we use pure component because they avoid unneccassary Re-render means performance boost , let say we are rendering list of 50 items in child component and if parent component is changed but no change in this list still we have to render this list again which is unneccassary for performance that is why we can use Pure Component 

// WHAT IS SHALLOW COMPARISON:

// it is of 2 type:

// 1. primitive types = the shallow comparison of a and b is true if both of a and b value is same and of same type EX: a and b both are string with value AMAN so  a(SC)b is true 

// 2. complex types = the shallow comparison of a and b is true if both a and b is refering to either same object and array in a memory EX : a =[1,2,3] or b=[1,2,3] or c=a show a(SC)b is false but a(SC)c = true 

// it is good idea to ensure that all children components are also pure to avoid unexpected behaviour if parent is pure 

// if your props and state of your pure component is simple primtive type then u can change directly their value because in this case shallow comparison take place of value but if they are object and array then never mutate them directly when dealing with pure component else always return a new obejct that reflects the new State this is because when it comes to object and array shallow comparison take place in terms of memory addess not in terms of value and if u direclty changed the value of object and array still the reference is same means no render will take place that is why always return new object and array as new state 