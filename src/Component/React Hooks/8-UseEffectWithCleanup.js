import React, { useState } from 'react'
import MounterContainer from './9-MouseContainer'

const UseEffectWithCleanup = () => {

    const [Display, setDisplay] = useState(false)

  return (

    <>
    
      <h1>UseEffect With CleanUp</h1>

      <button onClick={()=>{setDisplay(!Display)}}>Toggle Display
      </button>

      { Display && <MounterContainer/> }

    </>

  )

}

export default UseEffectWithCleanup

// here useEffect Hook can be used as componentWillUnmount means executing a code and function whenever a component is removed from DOM ex removing event listeners etc..

// here whathappening basically above is when a component is mounted then we will add event lisenter to a component MouseContainer and will show this MouseContainer component in this component based on toggle display button , but here if display is false then component is removed from the dom but still event listner is present due to which that event listner is trying to set state variable setCord() which is not present as component is unmounted which will show error so to avoid this error we will perform clean up action in useEffect Hook of MouseContainer 