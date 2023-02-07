import React from 'react'
import UseStateRender from './Component/React Render Behaviour/1-UseStateRender'
import Parent4 from './Component/React Render Behaviour/11-Parent4'
import Parent5 from './Component/React Render Behaviour/14-Parent5'
import Parent6 from './Component/React Render Behaviour/16-Parent6'
import Parent7 from './Component/React Render Behaviour/18-Parent7'
import UseReducerRender from './Component/React Render Behaviour/2-UseReducerRender'
import ContextParent from './Component/React Render Behaviour/20-ContextParent'
import ContextParent2 from './Component/React Render Behaviour/22-ContextParent2'
import { ChildA2 } from './Component/React Render Behaviour/23-ContextChild2'
import StateImmutabilityRender from './Component/React Render Behaviour/3-StateImmutabilityRender'
import Parent1 from './Component/React Render Behaviour/4-Parent1'
import Parent2 from './Component/React Render Behaviour/6-Parent2'
import Child2 from './Component/React Render Behaviour/7-Child2'
import GrandParent from './Component/React Render Behaviour/8-GrandParent'
import Parent3 from './Component/React Render Behaviour/9-Parent3'

const ReactRendering = () => {

  return (

    <>
    
    
      <h1 style={{textAlign:"center",color:"royalblue"}}>REACT RENDERING BEHAVIOUR</h1>
      
      {/* useState Render */}
      <UseStateRender/>

      {/* useReducer Render */}
      {/* <UseReducerRender/> */}
      
      {/* Rendering Wtih Refrence Type State */}
      {/* <StateImmutabilityRender/> */}

      {/* Parent and Child Render */}
      {/* <Parent1/> */}

      {/* Same Element Reference */}

      {/* <Parent2>
        <Child2/>
      </Parent2> */}

      {/* <GrandParent/> */}

      {/* React Memo */}
      {/* <Parent3/> */}
      
      {/* Incorrect Memo With Children */}
      {/* <Parent4/>   */}

      {/* Incorrect Memo with Impure Component */}
      {/* <Parent5/> */}

      {/* Incorrect Memo With Props Refernce */}
      {/* <Parent6/> */}

      {/* UseMemo and UseCallBack */}
      {/* <Parent7/> */}
      
      {/* Context Rendering Behaviour And Memo */}
      {/* <ContextParent/> */}

      {/* Context Same Element Reference */}
      {/* <ContextParent2> */}

        {/* <ChildA2/> */}

      {/* </ContextParent2> */}

    </>

  )

}

export default ReactRendering

// ######### React Render Behaviour

// in this tutorial we will learn and understand why React Component render , re-render , how to opimize rendering and incorrect optimization 

// ######### Rendering and Re-Rendering in React

// when we run react app the code written in our component get converted into react element that get mounted inside the DOM , the react split this work into 2 phase : render phase and commit phase 

// in render phase react start from root of the component tree and goes downward to the leaf of the component tree , while traversing the each component react invoke react.createElement() method for each JSX of component and convert it into react element and stores the rendered output , react element are just js object that describe structure of your UI , the stored output then passed to commit phase and in this phase the react element are mounted into DOM by reactDom package 

// well above process is only for initial render of react application but in react component needs to re-render to update the UI and this is done in way ::

// here again react start from root of the component tree and goes till the leaf of this tree finding all the component that have been flagged as needing update , a component can flag itself for update by calling either useState or useReducer dispatch method , then for each flagged component react invokes React.createElement() method and convert that component JSX into react element and same for other flagged component as well and store the rendered output , then previous rendered output is compared with new rendered output that is comparing react element , and after comparison new updated list is created with all the changed react element after update is then passed to commit phase which then mount changed component to DOM 

// rendering is not same as re-rendering or updating the DOM , a component can render without any visible changes to the DOM and during re-render if component jsx convert into same react element as it did during previous render then that component element are discarded for changes and no change applied to the DOM and this is very imp for performance because performance issue is because of slow DOM update  , Render phase can be slow but commit phase is very fase always 

// ########### State Immutability

// here so far we have see how re-render take place when state is of primitive type now we will see how re-render work when state is reference type 

// NOTE ::: rendering is not a bad thing as this is how react knows wheter it needs to actually make any changes to the DOM but unncessary rendering is very bad

// #################  QUESTIONS ON OPTIMIZATION

// 1. so far we have learn 2 optimization taken same element reference and React.Memo() but when to use which one ::

// we can use same element reference when your parent component re-render because of its state change and your child component does not care of changes to this state as it has no props  , but note this techinque will not work if your parent component is re-render because of changes to its props and if its parent component also re-render

// we can use React.Memo() when our child component is asked to re-render because of changes to its parent component state and that state which is my child component is not using as a prop , so that avoid unnecessary render as that my child component does not care for that state 

// 2. if React.Memo() provides the optimization by comparing the props and state , then why not wrap every single component with React.Memo() , for this Dan Abramoff said that shallow comparison are not free they are O(prop count) , in simple term ex is :

// let say a component render time is 10ms and by React.memo shallow comparison the time become 2ms in first round of re-render let say props does not change so render time is 2ms but for next the round props got changes due to which render time become 2 + 10ms as 2ms is also added becase shallow comparison is not free so total become 12ms which is greater then normal render of component that is 10ms as a result performance instead of boost getting reduced , so use React.Memo() only for those component which perform expensive render and their props hardly change , and also note that when u optimized component by react.memo , react will aslo skip the rendering of that component's child component as well because by default behaviour of react is that if parent component render then child also render but if parent doesnot render then child also does not render

// here we know that using object , array , functions and any reference type as props for the component it will nulify memoization done by React.Memo() and re-render component always but we know in big projects we always gonna use obejct,array and functions as a props to other component so to overcome this problemn and perform optimization with reference type props we will use UseMemo() and UseCallback() hooks 

// ############## Way to cause a re-render

// here so far we learnt to render a component we can use state setter function , useReducer dispatch function and if parent component re-render but there is another way also to re-render a component and that is React Context 

// lets say my React tree have 5 component  , app , parent , child a , b, and c component all are nested below. the parent component contain Count state which it render in its JSX and same Count state has to be rendered by Child c component as well , so we will create a new Count context in parent component and provide this context with Count value by .Provider method to Component C and using useContext hook we will consume the Context value , now how it work internally in react::

// after intial render is completed lets say i have done the above functionality in code , now i called the state setter function and incremented the Count value in parent component as a result parent componet flagged now react will the find the flagged component and start rendering parent component and also render .Provider component and checks wheter .Provider has been given a new value which is Count , now re-render take place for all those component which are consuming this context value that is Child c component also re-render , but this is not something which happen infact because of default behaviour of react every child component of parent also re-render and not only those comonent which are consuming context value 