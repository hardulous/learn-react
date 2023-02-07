
// Context For Profile page

import React , { useContext, useState , useEffect } from "react";

const Auth = React.createContext(null);

// Provider function to provide User state and its method to my whole component tree
export const AuthProvider = ({children})=>{
    
    console.log("Auth Provider Executed")
    useEffect(() => {
    
        console.log("Auth Provider is mounted")
      
      }, [])

    const [User, setUser] = useState(null);

    const login = (user)=>{
        setUser(user);
    }

    const logOut = ()=>{
        setUser(null);
    }

    return <Auth.Provider value={{User,login,logOut}}>
            
            {children}
            
           </Auth.Provider>

}

// this function when called return the context object to caller component 
export const useAuth = ()=>{
    return useContext(Auth);
}