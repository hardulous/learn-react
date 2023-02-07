
import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home1 from './Component/React Router/1-Home1'
import UserDetails from './Component/React Router/10-UserDetails'
import Admin from './Component/React Router/11-Admin'
import Profile from './Component/React Router/13-Profile'
import Login from './Component/React Router/14-Login'
import { AuthProvider } from './Component/React Router/15-AuthContext'
import RequireAuth from './Component/React Router/16-RequireAuth'
import About1 from './Component/React Router/2-About1'
import Navbar1 from './Component/React Router/3-Navbar1'
import OrderSummary from './Component/React Router/4-OrderSummary'
import NoMatchRoute from './Component/React Router/5-NoMatchRoute'
import Products from './Component/React Router/6-Products'
import FeaturedProducts from './Component/React Router/7-FeaturedProducts'
import NewProducts from './Component/React Router/8-NewProducts'
import Users from './Component/React Router/9-Users'

// import LazyComponent from './Component/React Router/12-LazyComponent'

// here for using lazy component

// import LazyComponent from './Component/React Router/12-LazyComponent'

// here React.lazy() take a call back function which return a dynamic import of component and here it import() will return a promise which is then converted into module that contain default exported react component


const LazyComponent = React.lazy(()=>{
            
  return import('./Component/React Router/12-LazyComponent');

})

const ReactRouter = () => {

  return (
    
    // providing Auth Context to all my component tree
   <>
    <AuthProvider>
    
      
      <h1 style={{textAlign:"center",color:"royalblue"}}>React Router</h1>
      
       {/* Routes Navigation by Link Component that is navigation by clicking on button  */}

       <Navbar1/>

      {/* Configure Routes */}

      {/* for routes configuration we have 2 component that is Routes and Route component , withing Routes component we define invidual route Component and a Route component is a component which accept 2 props path and element where path is a string url and element contain JSX or any other component , and basically when path present in route component is hit by user then JSX or component present in element props get Mounted on DOM and otherwise UnMount from DOM*/}

      {/* NOTE: children of routes component must be a route component else show error  */}

      <Routes>
         
         {/* here as path is / so when user open my app by-default Home1 component render */}

         <Route path='/' element={<Home1/>}/>
         
         {/* here when url hit by user /about1 then thus About1 component render */}

         <Route path='/about1' element={<About1/>}/>

        {/* Navigating Programatically */}

        <Route path='/order-summary' element={<OrderSummary/>}/>
        
        {/* No Match Route , here meaning of this * as a path is that when entered url by user does not match any of component route then at last this * path route is executed and will mount this NoMatchRoute component */}

        <Route path='*' element={<NoMatchRoute/>}/>

        {/* Nested Routes */}
        
        {/* for nested route we have to use closed Route component and inside just add whatver nested route need to provide */}

        <Route path='/products' element={<Products/>}>

           {/* here react router by default provide nested route url that is if there is nested route then child route by default have parent route path as base url that is if we click on feature we have /products/feature and for new we have /products/new */}

           <Route path='featured' element={<FeaturedProducts/>}/>
           <Route path='new' element={<NewProducts/>}/>

           {/* here now i will display featured component as parent url level that is Products even if featured is nested route by passing index instead of path attribute  , here by this if we render products component then featured component will be shown as default */}

            <Route index element={<FeaturedProducts/>}/>

        </Route> 
 
        {/* Dynamic Route */}

        <Route path='users' element={<Users/>}>
        
          {/* URL PARAMS : here if u hit url users/1 or any string or word after   users/ then brlow component will get mounted , here   meaning of this :userId is Route parameter means :userId   can have any type of value */}

          <Route path=':userId' element={<UserDetails/>}/> 
        
          {/* here now if we write users/1 then we will be shown   UserDetails component but if we hit users/admin then Admin   component will be shown because even if condition users/admin fit for dynamic routes as well because :userId can have any type of value but still as react match the route that is more specific to the path and as users/admin is   more specific that is why Admin component is shown , when   we do users/admin react always first find the exact   matching path route if it does not find it then it matches   the dynamic route */}
          
          <Route path='admin' element={<Admin/>}/>

          <Route index element={<h1>THIS IS WHERE OUTLET COMPONENT WILL COMe</h1>}/> 
          
        </Route> 
      
      {/* Lazy loading , here when we have dynamic imported lazy version of a component then in element props of Route component always mount the component inside React.suspense otherwise show error this is because suspense component have props fallback which will be shown for the time my lazy component is getting downloaded*/}
          
          {/* <Route path="lazy" element={<LazyComponent/>}/> */}

         <Route path="lazy" element={

            <React.Suspense fallback="Loading Pls Wait">

              <LazyComponent/>

            </React.Suspense>
        
        } />

      
      {/* Authentication , here to provide Auth Context to my app so that i can use this context state and method in profile and login component just wrap that components inside AuthProvider function and as inside this function we have Auth.provider component which is providing context to its children */}
      
       <Route path='Profile' element={
       
       <RequireAuth>

        <Profile/> 

       </RequireAuth>

      }/>
      
      <Route path='Login' element={<Login/>}/>

      </Routes>

    </AuthProvider>
     
    </>
  )

}

export default ReactRouter

// ############ React Router Version 6

// it is a fully featured client side routing library for react , its helps create and navigate between different URL that make up your web application , it provides unqiue URL for different components in the app and makes the ui easily shareable with other users

// in this Tutorial we will learn :

// 1. configuring routes in react app
// 2. navigate on button click
// 3. navigate programmatically
// 4. dynamic routes
// 5. nested routes
// 6. route parameter
// 7. lazy loading
// 8. authentication of routes 

// install React-Router by npm install react-router and npm install react-router-dom@6 to install version6

// ####### Nested Routes

// lets say in our app we have 3 component and navbar having 3 Link Home,About and Products with the hep of which we can switch betw these 3 component , by nested route we can switch btw a portion of view inside a page , here let say in products component we have again 2 links featured and new and by clicking on featured we are directed to url /products/featured component but note only ui below this links get changed and rest of ui remain same and same for if we click on new 

// ######### Index Routes 

// here some times we need nested child route component to render at parent url level and for this we use index attribute at route

// ######### Dynamic Routes

// here let say i have component route at /users in which i show list of all users and another route that is /user/id in which based on id value we will show component of user detail that is /user/1 show user 1 detail and /user/2 show user 2 detail but here we can not hard quote this id value in routes because we as a developer dont know what is value of this id so for this we will use Dynamic Routes and in dynamic route we have 2 way to add dynamic value either by Route parameter and Query String parameter

// 1. by route parameter that is after / we can write any parameter in this way ex , :userId here whatever i write after / like /1 , /string etc will be not part of url but used as request data and also dynamic route can be nested as well

// here but in real world apps we basically extract this dynamic route parameter as a data and using this parameter we perform some API calls and to get this route paramter from dynamic url we have a hook called useParams() from react-router-dom 

// 2. 2nd way to add data and params in a route and URL is query string parameter which is also an object of key-value pair similar to route parameter but sitax is /?name=aman&age=20 , here it means object is { name="aman" , age=20 } , these parameter are called Search Params in react 

// let say in user page we have 2 button active users and reset filter , by default page will show text showing all users by clikcing on active user button we will add search params called filter=active and in UI we will show text active users but by clicking on these reset filter we will remove the query string from url and back to previous user page 

// ######### Relative Links 

// here go to component product and there we have 2 component nested that is featured and new , when we click on either featured and new the url become /products/featured and /products/new this is because these featured and new are relative links , a relative link is a link that does not start with a forward slash but will inherit the closesd parent route path in which they are nested , as featured and new are nested inside product route so both of them will have products as base url.

// ########### Absolute Links

// Absolute links are always start with forward slash and will not have any base URL to make absolute path just add /featured and /new and this will construct the path of route from root of the app but will now have any base URL , here by doing just /feauted and /new this will not work as they both are nested inside /products so to make it work the absoulte path will be /products/featured and /products/new means have to manually set complete path for routing 

// here Relative links useful for nested routing and absoulte links useful for primary component routing like component present in NAVBAR 

// ########### Lazy Loading

// it is a technique where component not required on the HOME PAGE and LANDING PAGE can be split into seprate code bundles which can be downloaded only when those component are mounted on the DOM and user naviagte to them , we can think of it as incrmentally donwnloding the application , it helps reducing the initial load time of the application and hence improve performance.

// ########### Authentication

// some time in our apps we want some component to be protected means we will not allow some user for ex users who are not logged in to see some component , ex lets say in our app we have link profile component which show a component which display current user name on UI but if user is not logged-in then we will just navigate that user to login page and once user logged-in then we will navigate user to profile page  