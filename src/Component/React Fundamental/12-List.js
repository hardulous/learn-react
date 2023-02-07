import React from 'react';
import Persons from './13-Persons';

const List = () => {

    const persons = [

        {
          name:"aman",
          skill:"react",
          age:"20",
        },
        {
          name:"acey",
          skill:"angular",
          age:"25",
        },
        {
          name:"grlish",
          skill:"vue",
          age:"23",
        },
    ]

    const names = ["aman","acey","pratham","bgmi","lucifer"];

  return (
     
    <>
     <ul>

        <h1>List of persons</h1>
        
        {/* using persons component with details through map method */}
        {persons.map((person,index)=>{
            
            return <Persons cv={person} key={index}/>

        })}
         
     </ul>

        <h1>List of names </h1>
        
        {names.map((name,index)=>{

          return <li key={index}>My name is {name}</li>

        })}

    </>   

  )

};

export default List;

// NOTE:::

// when using javascript outside JSX and return statement no need to use {} curly braces but if u are using javascript inside JSX or in any tag of jsx then must must use {} curly braces else show error

// array.map() mostly use to render same component again and again and that component details is passed them by props 

// when using array.map() method and any iterator to render a same html again and again in react we have to them pass key prop to that rendered html and this is must otherwise it show error and this key prop can be any data type but must be unique for each element , this is because react Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required , the concept of key is imp because rendering a list that is same html again and again is a performance heavy task and to make react render UI efficiently we use key props which is reserved word and also we can not use key prop as a data render in a component

// for more on this go to website https://programmingwithmosh.com/react/why-do-i-need-keys-in-react-lists/

// here developer also use index as a key prop to list component but there can be problem using it :

// Reordering a list, or adding and removing items from a list can cause issues with the component state, when indexes are used as keys. If the key is an index, reordering an item changes it. Hence, the component state can get mixed up and may use the old key for a different component instance.

// but index can be used as a key props for some exception like :

// 1. If your list is static and will not change.
// 2. The list will never be re-ordered.
// 3. The list will not be filtered (adding/removing items from the list).
// 4. There are no ids for the items in the list.

// If all these exceptions qualify, then you can use an index as a key.