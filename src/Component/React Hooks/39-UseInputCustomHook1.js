
import React, { useState } from 'react'

// Custom Hook
import useInput from './40-useInput';

const UseInputCustomHook1 = () => {

    // const [FirstName, setFirstName] = useState('');
    // const [LastName, setLastName] = useState('');
    
    // now we will use our Custom Hook
    const [FirstName,bindFirstName,resetFirstName] = useInput('');
    
    const [LastName,bindLasttName,resetLastName] = useInput('');


    const handleSubmit = (e)=>{

        e.preventDefault();
        alert(`Hello ${FirstName} ${LastName}`)
        resetFirstName();
        resetLastName();
    }

  return (

    <>
    

      <h1>Custom Hook - useInput</h1>
       
      <form action="" onSubmit={handleSubmit}>

        <div>
            <label htmlFor="FirstName">FirstName:</label>

            {/* <input type="text" name="FirstName" id="FirstName" value={FirstName} onChange={

                (e)=>{
                  
                    setFirstName(e.target.value);
                }}
            /> */}

           <input type="text" 
           
            {...bindFirstName}

           />

           {/* here above spread operator will do 
           
             <input value={value}  onChange: e=>{

                 setValue(e.target.value)

              }/>

           */}

        </div>

        <div>
            <label htmlFor="LastName">LastName:</label>

            {/* <input type="text" name="LastName" id="LastName" value={LastName} onChange={

                (e)=>{

                    setLastName(e.target.value);
                }
            }/> */}

            <input type="text" 
           
            {...bindLasttName}

           />

        </div>

        <button type='submit'>Submit Form</button>

      </form>

    </>

  )

}

export default UseInputCustomHook1

// here in this component we will make a form where user can submit its firstname and lastname and then show user detail alert 

// but now to acheive same functionality as Custom Hook so can use this same functionality for more than one component wihtout repeating the code