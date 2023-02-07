
import React , {useState} from 'react'

const UseStateRender = () => {

  const [Count, setCount] = useState(0)

  console.log("UseState Render")

  return (

    <>
       
       <h1>UseState Rendering Behaviour</h1>
       
       {/* by clicking on this button each time re-render take plcae */}
      <button onClick={()=>{setCount(c=>c+1)}}>Increase Count by 1 - {Count}</button>    
      
      {/* after re-render if state value is 0 and u click on this button then component render for one more time and after on further click on this button component will not be re-rendered */}
      <button onClick={()=>{setCount(0)}}>Same Count - {Count}</button>    

      {/* same for this button if after render if state value is 5 and u click on this button then component render only one time */}
      <button onClick={()=>{setCount(5)}}>Increase Count by 5 - {Count}</button>    
      

    </>

  )

}

export default UseStateRender

// here as u can see during initial render console.log is hit but after that nothing will happen but as soon as u update the state variable by calling setState method re-render take place which again console.log is hit 

// HERE HOW RE-RENDER TAKE PLACE ::

// after initial render we have our component tree with component App and UseStateRender when we click on button useState method is executed which make UseStateRender Component as flagged and need an update , now in re-render render phase react first find flagged component and then for this component react trigger its .createElement() method and convert its JSX into react element and store the rendered result , now rendered result in compared with previous rendered result and looks for changes which is button content changed from 0 to 1 so this changes is then passed commit phase which mount changes to the DOM , this is how useState hook update DOM

// NOTE : here special thing about useState hook is that after re-rendering if u update the state using useState to the value same as current state value then react will only re-render component one more time and after that bail out from subsequent render , but same case for intial render then component will not render again

// EX:: first start with component tree we have App and UseStateRender Component , now by calling useState setter function we make a component flagged so again traversing and finding flagged component by react take place , but now there is one more process take place by react that is shallow comparison of previous state and new state returned by setter function , if state is primitive then in order to trigger re-render setter function must return new value and if refrence type then setter function must return new state reference and if this is not the case then react simply bail out from render phase 

// the bail out again have 2 case:

// 1. if only intial render is completed and setter function is called with value same as previous value of state then react bail out from this render phase

// 2. if component is re-render already and setter function is called with value same as previous value of state then this time component will proceed only with render phase but not with commit phase means only render phase take place which just convert JSX and store the output and compare it with previous output which in turn as same value of state is used so all changes are discarded and exit from render phase 