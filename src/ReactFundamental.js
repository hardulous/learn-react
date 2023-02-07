
import Greet from "./Component/React Fundamental/1-Greet";
import UserGreeting from "./Component/React Fundamental/11-UserGreeting";
import List from "./Component/React Fundamental/12-List";
import ClassWelcome from "./Component/React Fundamental/2-ClassWelcome";
import Hello from "./Component/React Fundamental/3-hello";
import Message from "./Component/React Fundamental/4-Message";
import Counter from "./Component/React Fundamental/5-Counter";
import FunctionClick from "./Component/React Fundamental/6-FunctionClick";
import ClassClick from "./Component/React Fundamental/7-ClassClick";
import EventBind from "./Component/React Fundamental/8-EventBind";
import ParentComponent from "./Component/React Fundamental/9-ParentComponent";
import StylesSheet from "./Component/React Fundamental/14-StylesSheet";
import FormHandling from "./Component/React Fundamental/16-FormHandling";
import MountingLifeCycle from "./Component/React Fundamental/17-MountingLifeCycle";
import UpdatingLifeCyle from "./Component/React Fundamental/19-UpdatingLifeCyle";
import FragmentsDemo from "./Component/React Fundamental/21-FragmentsDemo";
import PARENTCOMPONENT from "./Component/React Fundamental/24-ParentComponent";
import MemoComponent from "./Component/React Fundamental/25-MemoComponent";
import MemoParent from "./Component/React Fundamental/26-MemoParent";
import RefsDemo from "./Component/React Fundamental/27-RefsDemo";
import FocusInputParent from "./Component/React Fundamental/29-FocusInputParent";
import ForwardRefParent from "./Component/React Fundamental/31-ForwardRefParent";
import Portals from "./Component/React Fundamental/32-Portals";
import HeroName from "./Component/React Fundamental/33-HeroName";
import ErrorBoundary from "./Component/React Fundamental/34-ErrorBoundary";
import Practice  from "./Component/React Fundamental/35-Pratice";
import ClickCounter from "./Component/React Fundamental/37-ClickCounter";
import HoverCounter from "./Component/React Fundamental/38-HoverCounter";
import ClickCounter2 from "./Component/React Fundamental/40-ClickCounter2";
import HoverCounter2 from "./Component/React Fundamental/41-HoverCounter2";
import User from "./Component/React Fundamental/42-User";
import Counter2 from "./Component/React Fundamental/43-Counter";
import ContextParent from "./Component/React Fundamental/44-ContextParent";
import HttpGet from "./Component/React Fundamental/49-HttpGet";
import HttpPost from "./Component/React Fundamental/50-HttpPost";

function ReactFundamental() {

  return (

    <div className="App">
       
       {/* function based and class component */}
       <Greet/>
       <ClassWelcome/>
       <Hello/>

       {/* props and states */}
       <Greet name="pubg"/>

       {/*sometimes it is possible that u have no idea about what props u are sending and lets say u want to pass dynamic html to component as props so we can do go those props by props.children property of component and whatever html present in between that componenet is accessible by props.children porperty*/}
       <Greet>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde in rerum recusandae quasi maiores quo optio cumque blanditiis. Excepturi dolorem eius, sunt assumenda vero in? Ullam reprehenderit laborum ad.</p>
         <button>PLS SUBMIT</button>
       </Greet>

       <ClassWelcome name="AMAN BISHT"/>
       <ClassWelcome name="AMAN BISHT">
         <button>PLS SUBMIT AMAN</button>
       </ClassWelcome>

       <Message/>
       <Counter/>
       
       {/* performing click event and handle it */}
       <FunctionClick/>
       <ClassClick/>

       {/* Event Binding */}
       <EventBind/>

       {/* Methods as a props */}
       <ParentComponent/>

       {/* Condition rendering */}
       <UserGreeting/>

       {/* List rendering */}
       <List/>

       {/* Styling in react */}
       <StylesSheet primary={true}/>

       {/* Form Handling */}
       <FormHandling/>
       
       {/* Mounting LifeCycle Methods */}
       {/* <MountingLifeCycle name={"AMAN"}/> */}

       {/* Updating LifeCyle Methods */}
       {/* <UpdatingLifeCyle/> */}

       {/* Fragments in React */}
       <FragmentsDemo/>

       {/* Pure Class Based Component and difference btw Component and Pure Component class of React*/}
       {/* <PARENTCOMPONENT/> */}

       {/* Memo in function based component */}
       {/* <MemoParent/> */}

       {/* Refs */}
       {/* <RefsDemo/> */}

       {/* Ref using class component */}
       {/* <FocusInputParent/> */}

       {/* Forwarding Refs */}
       {/* <ForwardRefParent/> */}

       {/* Portals in React */}
         <Portals/>

       {/* Error Boundary and now wrapping each component inside error bondary so that if there is an error in any of hero component then other components will not get hidden*/}

       <ErrorBoundary>
         <HeroName heroName={"batman"}/>
       </ErrorBoundary>

       <ErrorBoundary>
         <HeroName heroName={"superman"}/>
       </ErrorBoundary>

       <ErrorBoundary>
         <HeroName heroName={"joker"}/>
       </ErrorBoundary>
       
       {/* pratice , be sure that when using selector in react for same component then out of many component which is rendered first that event listner will be applied only to that component because id is always unique and as component is same*/}
       <Practice/> <br /><br /><br />
 
       {/* High order component , here by HOC this age props we cannot directly used  in this component but first we need to again passed this age prop from defination of HOC */}
       {/* <ClickCounter age={10}/> */}
       {/* <HoverCounter age={15}/> */}

       {/* Render Prop */}

       <User render={(isLoggedIn)=> isLoggedIn?"Pubg":"Guest"}/>
       
       {/* here even counter2 component is used 2 times still no conflict in its state because each time new instance of counter2 component will be created */}

       {/* <Counter2 render={

          (count,incrementCount)=>{

            return <ClickCounter2 count={count} incrementCount={incrementCount}/>

          }
        }
       />
       <Counter2 render={

          (count,incrementCount)=>{

           return <HoverCounter2 count={count} incrementCount={incrementCount}/>

          }
        }
       /> */}

       {/* WE CAN ALSO USE RENDER PROPS METHOD BASED ON CONDITION */}
       
       <Counter2 render={

          (count,incrementCount,name)=>{

            if(name=='Counter'){

              return <ClickCounter2 count={count} incrementCount={incrementCount}/>

            }
            else{
              
              return <HoverCounter2 count={count} incrementCount={incrementCount}/>

            }
          }
        }
       />

       {/* Context API */}      
       <ContextParent/>
       
       {/* HTTP with react */}
       <HttpGet/>
       
       <br /><br />

       <HttpPost/>


    </div>

  );

}

export default ReactFundamental;

// NOTE:: in react the flow of data is unidirectional means data , props and state passed only from parent to child component but can not from child to parent component directly 

// ######## Function Based Component:

// they are simple javascript function and one advantage of them over class component is no need to use this keyword in them , also called dumb and presentational component , no need to use render() method and can simply return html/jsx , we can also used class component lifecycle method and state using hooks in function based component 

// ######### Class Based Component:

// they are es6 classes of javascript which have more feature than function component because each class can maintain their own private state , they provide many life-cycle method also called stateful,smart and container component , to return some html/jsx always need to return inside render() method 

// ############ JSX

// here whatever we are returning either in class and function component is not html and javascript this is called jsx which is javascript xml but similar to xml jsx tag can also have attribute,tag name and children  and ultimatly by babel jsx is translated to js which is understood by browser 

// it is possible to control what should render on the scrren by component in 2 way either by props and by state

// ######## PROPS

// here props/properties is an optional input which both function and class based component can accept which allow our components to be dynamic , to passed props simply where u are using that component passed attribute with some value and by-default that become props for that component , one important rule of props are props are immutable means we can not change props one assigned 

// ######## STATES

// state are basically component specific data u can consider state as function variables , but props as function parameter ,props are immutable but on the other hand state is mutable , in class component state is accessed by this.state but in function state is accessed by useState hook 

// ##### DESTRUCTURING 

// it allow to use array element in variable and to use object property directly with property name without . operator of object in react this concept used to destructure props and state to make code readable  

// ######## EVENTS

// it means u are allowing in your project user interaction means when user lets say click on button and lets say hover over website u want some code to execute and this is event and handling that code called event handling 

// ####### Binding Event Handler

// go to website https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

// ####### METHODS AS A PROPS AND CHILD COMMUNICATE WITH PARENT COMPONENT

// bascially react is unidirectional means data passed from parent to child by props but now lets say child want to change data present in parent then we send method as a props to child component 

// ###### CONDITIONAL RENDERING

// when making a project in react will always need to show and hide some html based on conditions and for this we use conditions in javascript , we have 4 different approaches and using them we hide and show JSX , 1st is if/ese , 2nd is element variables , 3rd ternary operator and 4th is short circuit operator 

// ######## List Rendering

// some times in react or web app we want to display list of items,products means we repeat same html and render them for this we use array.map() method which execute inner callback function to iterate over array element and return new array of elements with changes on them , but in react instead of making calculation we will tranform it into JSX

// ######### Styling in css

// styling in react have 3 way make sperate .css file , use Inline style object and 3rd is Css Modules 

// ######## Form Handling

// handling of form means how to capture input from input tag , textarea , selectTag and data for form submission , in react we usually want react to control form element and such element whose value controlled by react is called CONTROLLED COMPONENT  

// ######## Life-Cycle Methods

// when we create a react component , the component goes through several stages in its lifeCycle  , react provide built-in method which we can override during this cycles , the lifeCycle methods of react class based component will note work in function based component as in function based component there is useEffect hook which work similar to these lifecycle methods of class component , in class there are 4 statges of lifeCycles:

// 1. MOUNTING : its lifecycle methods are called when instance of component is being created and inserted into the DOM and methods name are , constructor , static getDerivedStateFromProps , render and componentDidMount methods

// 2. UPDATING : its lifecycle methods are called when component is being re-rendered as a result of changes to either its props of state and methods name are , static getDerivedStateFromProps , shouldComponentUpdate , render , getSnapshotBeforeUpdate and componentDidUpdate methods

// 3. UNMOUNTING : its lifecyle methods are called when component is being removed from the DOM and methods name are , componentWillUnmount methods

// 4. ERROR-HANDLING : its lifecycle methods are called when there is any error came when rendering a component , in a lifecycle Method or in constructor of any child component , static getDerivedStateFromError , componentDidCatch , methods 

// ####### FOR LIFECYCLE METHODS MORE PRACTICAL EXAMPLE GO TO WEBSITE : 
// https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b#:~:text=React%20Lifecycle%20methods%20with%20examples%20Mounting.%20The%20mounting,change%20in%20state%20and...%20Unmounting.%20The%20final%20


// ########## React Fragments

// fragments let u group list of children elements without adding extra node and element in a DOM 

// ######### Pure Components

// so far the class based component we have created is extending component class of react but there is another way to create class component that is by extending Pure component class from react , pure component works only for CLASS BASED COMPONENT 

// ######### Memo

// similar to make a component pure for performance optimization in class based component in function based component to acheive this we have memo 

// ######### Refs

// refs make it possible to access DOM node directly within react. and not only dom element it is possible to add ref to a class component because internally component are nothing but our custom created html element but ref does not work for function based component unlike we use useRef() hook because they have no instance created when component is mounted 

// ######## Forwarding Refs

// it is a technique for automatically passing a refs from parent component to its children component and to add refs to function based component we use forwarding refs

// ######## Portals

// Portals provide a way to render children component into a DOM node that exists outside the DOM hierarchy of parent component , means so far we had only one DOM in our html in which we have mounted our whole Components that is root element but using portals we can put our component in different DOM node which appear as different heirarcy but in react that hirarchy of parent and child remian same means still we can perform data transfer from parent to children and still event bubbling take place . An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree

// ######### Error Boundaries

// it is a 4th statge of lifeCycle of a component which contain 2 methods static getDerivedStateFromError(error) and componentDidCatch(error,info) , basically when error comes it unmount our component and show error by this methods we can override the run time error comes during rendering and catch those error and can show some Error UI component 


// ######### High order component

// a HOC s a pattern where a function take a component as an argument and return a new component and that function is called higherOrderComponent("component") and return a new version of this component 

// basically any component under go to HOC method can get some properties and method which we can pass to that original component as props and here also note that both clickcounter and hovercounter will have seperate state value count assigned to them by HOC 

// all these help in code reusability 

// one common mistake is that if we have made a component HOC then we can not directly passed props to that component but props for that component can only be instlized from defination of that HOC component that is in withCounter file component 

// not only component but we can also passed whatever argument we want to that HOC function 

// ############# Rendered Props

// it is also a pattern which is used to share similar code and functionality btw component , similar to HOC but sharing of code btw react component is done using a prop whose value is a function and based on value we passed to this function we can control what to display or not 

// ########### Context 

// context provides a way to pass data through the components tree without having to pass props down manually at every level means to avoid props drilling  

// ########## React Http

// well react is a ui library to create frontend web apps it has no feature to make AJAX calls but in web apps we always tend to feth data from the server and populate our webiste and for this we have http library called fetch api and axios to fetch data from server , but have to download package by npm install axios 