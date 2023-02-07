import React , {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from './15-AuthContext';

const Login = () => {

  console.log("Login Render");
  useEffect(()=>{
      
    return ()=>{
        console.log("Login UnmMounted");
    }
  })
  
  // this function will provide auth context value and method
  const auth = useAuth();

  console.log(auth);
  
  const Navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  // check wheter path is set on the state object while navigating to these Login route and use same as a redirect path
  const redirectPath = location.state?.path || './';

  const [Name, setName] = useState('');

  const handleLogin = ()=>{
     
    auth.login(Name); // this will execute Auth Provider as well because actual state that is auth.User is present in Auth PRovider component
    Navigate(redirectPath,{replace:true});

  }

  return (

    <>
    

      <h1>Login Page</h1>
      
      <label htmlFor="Usernam">Username</label>

      <input type="text" name="Username" id="Username" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
      
      <button onClick={handleLogin}>Log-In</button>
      
    </>

  )

}

export default Login