
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import {useAuth} from './15-AuthContext'

const Profile = () => {
  
  console.log('Profile Render')

  useEffect(()=>{
    return ()=>{
        console.log('Profile UnMounted');
    }
  })
  
  const auth = useAuth();

  const Navigate= useNavigate();

  const handleLogOut = () =>{

    auth.logOut(); // this will again execute Auth Provider and whole component tree again
    Navigate('/');

  }

  return (

    <>
    

      <h1>Profile Component</h1>

      <h5>
          {!auth.User ? "No User To Shown":`Welcome ${auth.User}`}
      </h5>

      <button onClick={handleLogOut}>Log-Out</button>


    </>

  )

}

export default Profile

// this is a protected route component 