import React from 'react';

const FragmentsDemo = () => {

    const Name = ['aman','acey','lucier','dhol']

  return(

    // here now both h1 and p tag is added as a sibling in dom and withour fragments we need to wrap them inside a div element to make them sibling which in turn will add extra JSX in DOM 
    <>

     <h1>Fragments Demo</h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nulla asperiores sunt</p>
     <h1>NAME OF MEN-</h1>

      {Name.map((name,index)=>{

          return <React.Fragment key={index}>

                 <li>{name}</li>

          </React.Fragment>

      })}

    </>

  )

};

export default FragmentsDemo;

// Fragments allow u to add to wrap child and sibling JSX element inside a tag which have no name and also that tag will not get-Inserted inside a DOM and it is used because we can return only one JSX element from a component but if i want to return a sibling JSX also then we use this FRAGMENTS in REACT :: 

// SYNTAX is 

// <React.Fragment></React.Fragment> and other is <></> but with 2nd sytax u can not pass key attribute 