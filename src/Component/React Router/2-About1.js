import React , {useEffect} from 'react'

const About1 = () => {
  
  console.log("About1 Render");

  useEffect(()=>{

    return()=>{
      console.log("About1 Unmounted")
    }

  },[])

  return (

    <h1>About1 Component</h1>

  )

}

export default About1

// here this component work similar to Home1 component that is this component get mounted on dom if url on browser is /about1 and unmounted from dom if path is different then /about1