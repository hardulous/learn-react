import React from 'react'
import { Navigate, useLocation } from 'react-router';
import { useAuth } from './15-AuthContext'

const RequireAuth = ({children}) => {
  
  const location = useLocation();
  
  console.log('Require Auth Render')
  console.log(location);

  const auth  = useAuth();

  // here to if User is not logged in means auth.User does not exist then navigate to login component by <Navigate/> component 
  if(!auth.User){
      
    return <Navigate to ="/login" state={{path:location.pathname}}/>

  }else{

    return children

  }

}

export default RequireAuth

// here this component is used as wrapper above Profile component to know wheter User is logged in or not to allow him access to Profile Component