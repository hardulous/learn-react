
import React from 'react';

function HeroName( {heroName} ) {

  // sending custom error 
  if(heroName==='joker'){
    throw new Error("Not a Hero");
  }

  return (

    <>

      <h1>{heroName}</h1>

    </>

  )

}

export default HeroName;

// A class component that implements either one or both of the lifecycle methods static getDerivedStateFromError or componentDidCatch becomes an Error Boundary

// static getDerivedStateFromError() used to render a fallback UI after an error is thrown and the ComponentDidCatch() method is used to log the error information 
