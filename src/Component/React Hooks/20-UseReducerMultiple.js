import React, { useReducer } from 'react'

const initialState1 = "Aman";
const initialState2 = 100;

const reducer1 = (state,action)=>{
    
    console.log(action);
    switch (action.type) {
        case 'Change':
            
            return action.value;
    
        default:
            
            return state;
    }
}

const reducer2 = (state,action)=>{
    
    console.log(action);
    switch(action.type) {
        case 'Change':
            
            return Number(action.value);
    
        default:
            
            return state;
    }
}

const UseReducerMultiple = () => {
    
    // 1st useReducer
    const [Name, dispatch1] = useReducer(reducer1,initialState1);

    // 2nd useReducer
    const [Marks, dispatch2] = useReducer(reducer2,initialState2)

    // Note: dispatch method also must be different for each state 

  return (

    <>
    

      <h1>Multiple UseReducer Hook</h1>

      <div>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="Name" value={Name} onChange={(e)=>{

            dispatch1({type:'Change',value:e.target.value})

          }} />
      </div>

      <div>
          <label htmlFor="Marks">Marks</label>
          <input type="text" name="Marks" id="Marks" value={Marks} onChange={(e)=>{

             dispatch2({type:'Change',value:e.target.value})

          }} />
      </div>

       <h3>My Report Card = Name is {Name} and Marks is {Marks}</h3>

    </>

  )

}

export default UseReducerMultiple

// here we can use multiple useReducer Hook in same component 