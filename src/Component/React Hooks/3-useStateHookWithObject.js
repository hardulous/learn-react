
import React ,{useState} from 'react'

const UseStateHookWithObject = () => {

    // here state variable can be any data type 
    const [User, setUser] = useState(

        {
            firstName:'',
            lastName:'',
        }
    );

    const handleChange = (e)=>{

        setUser({

            ...User,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = (e)=>{

       e.preventDefault();
       console.log(User);

       setUser({

           firstName:'',
           lastName:'',

       });

    }

  return (

    <>
    
      <h4>User Details</h4>

       <form action="" onSubmit={handleSubmit}>

           <label htmlFor="firstName">firstname</label>
           <input type="text" id ="firstName" value={User.firstName} onChange={handleChange} />
           
           <label htmlFor="lastName">lastName</label>
           <input type="text" id="lastName" value={User.lastName} onChange={handleChange} />

           <button type="submit">Submit</button>

       </form>      

       <ul>
           <li>firstname is = {User.firstName}</li>
           <li>lastname is = {User.lastName}</li>
       </ul>

    </>

  )
}

export default UseStateHookWithObject

// here unlike in class component this.setState() which always merge the state means whatever new state value we add in this.setState() it will merge this new value with other value and only ovveride the previous value but in this  function based component whenever we execute setCount() method it will complety override the whole state of a component and to avoid this always use ... spread operator in setCount() to merge new value with previous value in state 
