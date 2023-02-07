
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../App.css';
import { useAuth } from './15-AuthContext';


const Navbar1 = () => {
 
  const auth = useAuth();
  console.log("Navbar");
  return (

    <>
    
        <div style={{
            backgroundColor:'black',
            display:'flex',
            justifyContent:'space-evenly'
        }}>

            {/* <Link to='/'>Home1 Component</Link>
            <Link to='/about1'>About1 Component</Link> */}

            {/* using NavLink so we can know which link is currently active */}

            <NavLink to='/'>Home1 Component</NavLink>
            <NavLink to='/about1'>About1 Component</NavLink>
            <NavLink to='/products'>Products Component</NavLink>
            <NavLink to='/users'>Users Component</NavLink>
            <NavLink to='/lazy'>Lazy Component</NavLink>
            <NavLink to='/Profile'>Profile Component</NavLink>
            {
              !auth.User && <NavLink to='/Login'>Login Component</NavLink>
            } 

        </div>
    
    </>

  )

}

export default Navbar1

// here now we navigate from one component to another using Link Component by clicking on element provided by React-router-dom

// this link component similar to anchor tag component but instead of href we have 'to' attribute in which when user click on any link component then url present in 'to' attribute is hit on browser and then equivalent component present on Route component whose url in path attribute is similar to url in 'to' attribute of Link will get mounted on dom 

// Link component is used for client side navigation that is navigating withing the App comopnents 

// but if i want to navigate to any external webiste then we should use simple anchor tag <a href='path of external website'/>

// here but one problem currently even if we are in home1 component route still both link Home1 or About1 link looks same but in react world application we should style the link in which we are currently present that is active link , so to solve this problem react-router give us another Component called NavLink component which knows wheter a link is active link or not 

// the special thing about this NavLink component is that ,  which ever navlink routes is active currently on web page that NavLink component will get className active so we can style this active class 

// here both NavLink and Link component work same to navigate btw the components , so difference is we use NavLink component when we want to highlight some routes in which we are currently at , but if dont want to highlight the current routes then we use Link Component 