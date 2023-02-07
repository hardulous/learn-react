
import React, { useState } from 'react'

const StateImmutabilityRender = () => {

    // now my state is an object which is refrence type
    const [Person, setPerson] = useState({

        fName : 'Aman',
        lNAme : 'Bisht',
    })

    // now my state is array which is also a refrence type
    const [Item, setItem] = useState(['Orange','Mango']);


    const changeName = ()=>{

        // here instead of sending new refernce of object try to send same object with updated value 

        // Person.fName = 'Acey';
        // Person.lNAme = 'Chaurasia';
        // setPerson(Person);

        // above does not trigger re-render because refrence is same so to trigger re-render will do:
        const newPerson = {
            ...Person,         
            fName:'Acey',
            lName:'Chaurasia',
        }

        // here what happening first created a new object with value equal to value of Person obejct but modified property Fname and Lname , so now new refrence is created which will trigger re-render
        setPerson(newPerson);
    }

    const changeItems = ()=>{

        // here instead of sending new refernce Array try to send same Array Items with updated value

        // Item.push('Apple');
        // Item.push('Pineapple');
        // setItem(Item); 

        // above does not trigger re-render because refrence is same so to trigger re-render will do:
        const newItem = [...Item,'Apple','Pineapple'];

        // here what happening first created a new Array with value equal to value of Item Array but added new item apple and pineapple as array element, so now new refrence is created which will trigger re-render
        setItem(newItem);

    }

    console.log('RefrenceUseState Render');

  return (

    <>
    

      <h1>Rendering With Reference Type State</h1>
      <h4>Name is : {Person.fName+Person.lNAme}</h4>
      <button onClick={changeName}>Change Name</button>

      <h4>Items</h4>
      <ul>
          {
              Item.map((i,ind)=>{
                  return <li key={ind}>{i}</li>
              })
          }
      </ul>
      <button onClick={changeItems}>Add Item</button>
     
    </>

  )

}

export default StateImmutabilityRender

// now we will see how rendering work when state is reference object type

// here as u can see even we have changed Person state value but still when calling state setter function re-rendering is not tatking place , this is because for re-rendering of component using state as refrence type the shallow comparison of refrence take place instead of value means if refrence of previous state and new state if same then even if their value is different still re-rendering does not take place but if refrence is different then even wheter value is same or not still re-rendering take place 

// now when it comes to refrence type State then no exception take place for useState and useReducer means always re-render take place when calling setter or dispatch method as we are sending new refrence as state so shallow comparison is always false so re-render take place always 

// here same above Re-Render behaviour take place for useReducer hook as well