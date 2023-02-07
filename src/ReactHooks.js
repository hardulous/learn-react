
import React from 'react'
import UseStateHook from './Component/React Hooks/1-useStateHook'
import UseEffectWithIncorrectDeps from './Component/React Hooks/10-UseEffectWithIncorrectDeps'
import MultipleUseEffect from './Component/React Hooks/11-MultipleUseEffect'
import UseEffectFetchData1 from './Component/React Hooks/12-UseEffectFetchData1'
import UseEffectFetchData2 from './Component/React Hooks/13-UseEffectFetchData2'
import UseContext from './Component/React Hooks/14-UseContextHook'
import UseReducerHook from './Component/React Hooks/18-UseReducerHook'
import UseReducerComplex from './Component/React Hooks/19-UseReducerComplex'
import UseStateHookMultpleCall from './Component/React Hooks/2-useStateHookMultipleCall'
import UseReducerMultiple from './Component/React Hooks/20-UseReducerMultiple'
import UseReducerWithContext from './Component/React Hooks/21-UseReducerWithContext'
import UseReducerFetch1 from './Component/React Hooks/26-UseReducerFetch1'
import UseStateHookWithObject from './Component/React Hooks/3-useStateHookWithObject'
import UseStateHookWithArray from './Component/React Hooks/4-useStateHookWithArray'
import UseEffectHook from './Component/React Hooks/5-useEffectHook'
import ConditionallyRunEffect from './Component/React Hooks/6-CondionallyRunEffect'
import RunEffectOnlyOnce from './Component/React Hooks/7-RunEffectOnlyOnce'
import UseEffectWithCleanup from './Component/React Hooks/8-UseEffectWithCleanup'
import UseCallbackHook from './Component/React Hooks/27-UseCallbackHook'
import UseMemo from './Component/React Hooks/31-UseMemo'
import UseRefHook from './Component/React Hooks/32-UseRefHook'
import UseDocumentTitleCustomHook1 from './Component/React Hooks/33-UseDocumentTitleCustomHook1'
import UseDocumentTitleCustomHook2 from './Component/React Hooks/34-UseDocumentTitleCustomHook2'
import UseCounterCustomHook1 from './Component/React Hooks/36-UseCounterCustomHook1'
import UseCounterCustomHook2 from './Component/React Hooks/37-UseCounterCustomHook2'
import UseInputCustomHook1 from './Component/React Hooks/39-UseInputCustomHook1'

const ReactHooks = () => {
    
  return (

    <>
    
      <h1 style={{textAlign:"center",color:"royalblue"}}>REACT HOOKS</h1>

      {/* useState Hook */}
      <UseStateHook/>

      <UseStateHookMultpleCall/>

      <UseStateHookWithObject/>

      <UseStateHookWithArray/>

      {/* useEffect Hook */}
      <UseEffectHook/>

      <ConditionallyRunEffect/>

      <RunEffectOnlyOnce/>

      <UseEffectWithCleanup/>

      <UseEffectWithIncorrectDeps/>

      <MultipleUseEffect/>

      <UseEffectFetchData1/>

      <UseEffectFetchData2/>

      {/* useContext Hook */}
      <UseContext/>

      {/* useReduceer Hook */}
      <UseReducerHook/>

      <UseReducerComplex/>   

      <UseReducerMultiple/>

      <UseReducerWithContext/>

      <UseReducerFetch1/>

      {/* useCallback Hook */}
      <UseCallbackHook/>

      {/* useMemo Hook */}
      <UseMemo/>

      {/* useRef Hook */}
      <UseRefHook/>

      {/* Custom Hooks */}
      <UseDocumentTitleCustomHook1/>

      <UseDocumentTitleCustomHook2/>

      <UseCounterCustomHook1/>

      <UseCounterCustomHook2/>

      <UseInputCustomHook1/>

    </>

  )

}

export default ReactHooks

// ######### React Hooks

// hooks basically allow you to use all react features like state , context api etc without writing class component because as before hook this features did not work for react function component

// hooks do not work in class based component

// 1st reason to create hooks are created so that we dont have to use class component this is because in class component we need to understand some topics like this keyword which work different in react from other language and developer find it difficult to create class component and also class component take more time to reload , so with hook we dont have to work with class component which solve our problem

// 2nd reason is that in order to make component share some logic code we use HOC and render props method for which we have to refactor code which make it very bad to read but with hooks we can share code btw components without refactoring our component 

// 3rd reason is in class component lets say for data fetching and event listener we use componentDidMount , componentDidUpdate and componentWillUnmount method which result in more code , but by hook same features can be done in function based component which avoid such lifecycle methods means all data fetching and event listener can be declared in same block instead of putting them in different lifecycle methods

// ########### UseState Hook

// here to create a state variable in function component we use useState Hook 

// ########## UseEffect Hook

// in class component we performed side effect like api,dom manupulation etc in lifecycle method but in function we dont have this lifecycle method but in function component we have useEffect() hook which can be used to perform side effect , also in class component related code are put in different lifecycle method but by useEffect hook all related code can be put in same block , it act as replacement of componentDidMount , componentDidUpdate and componentWillUnmount methods

// to learn useEffect hook completly go to website = https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect%20%28callback%2C%20dependencies%29%20is%20the%20hook%20that%20manages,of%20your%20side-effect%3A%20being%20props%20or%20state%20values.

// ########### UseContext Hook

// similar to context api in class component to acheive same sharing of functionality and data btw nested component instead of props drilling we have useContext hook in function component 

// ########### UseReducer Hook

// here useReducer hook is used for state management similar to useState hook which also manage state , but useReducer hook is used for complex state management and in fact useState is built using useReducer

// this useReducer work same as Reducers of React-Redux , means first need to dispatch an action which is a object and this action then go to reducer , a reducer basically a pure function which have current state and action as parameter and based on action type we update the state of component.

// SINTAX :: useReducer(reducer,intialState value) and here reducer(currentState,action) and it return pair of variable one is state variable and another is dispatch method

// here when to use useState hook and useReducer hook as both are used for state management 

// if our type of state is primitive then use useState and if type of state is refrence type like obj and array then use useReducer , if we are using only one or 2 state variable in a component then useState is better choice but if we there is complex state managment in a component then use useReducer hook , always avoid making multiple setState call using useState , but if there is then use useReducer hook that can update all state directly in one go and makes our code more predictable and maintainable , here if using state for local component then useState is better choice but if require single / global state for every nested component then useReducer hook is better because all we have to do is just pass the dispatch method and based on acion type we can update multiple state at a same time but with useState hook we have to pass multiple update function for each state . 

// ########### UseCallback Hook

// shallow comparison in case of function are reference type that is instead of value of function their reference in memory is checked and as each time when parent component is mounted object and refernce are newly created and as functions are also object in javascript their refernce are checked for shallow comparison which in result always false as each time new function which is passed as props will be created as a result the component using that function as a props trigger unncessary re-render so to avoid this we use useCallback() hook for performance optimization

// ########### UseMemo Hook

// similar to useCallback() hook which is used for performance optimization we also have another hook called useMemo() hook for optimization 

// so difference btw useCallback and useMemo is that useCallback cached the function instance {means use the previous function instance instead of creating new on every render} but useMemo invokes the function and caches its return value 

// ########## UseRef Hook

// this hook make it possible access DOM node directly in function component and it is similar to React.createRef() used in class component to create ref object  

// ######### Custom Hook

// here so far the hook we have used are provided by react library which are functions which perform some work , but we can create our own custom hook which perform some work and can use those hook in any other component as well 

// a custom hook is basically a js function whose name is start with 'use' , a custom hook can also call other hooks if required , means taking advantage of built-in hook and then creating our own hook 

// Why we want custom hook is because to share logic , code and functionality between the components means it is alternate of high order component {HOC} and render props method which is used in class component but to acheive same functionality in function component we use Custom Hook  