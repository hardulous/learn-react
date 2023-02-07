
// here we will create our context 

import React from "react";

const UserContext = React.createContext({name:"Pratham",age:"10"}) // here context is created with default value object with name and age attribute and this default value is used if there is not provider method used , but if there is multiple nested provider method is used then nearest provider method value is used as context

// here every context object created by React.createContext() comes with Provider and Consumer React Component which is needed for step 2 and step 3

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer};
// here for step 2 use provider method in that component which and whose children need that context object 
export default UserContext;