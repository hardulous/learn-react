import React from 'react';

function Hello() {

//   return (        returning jsx

//     <div className='c1' id='hello'>
//         <h1>Hello AMAN BISHT</h1>
//     </div>

//   )

  // inbuilt react function this wil return div tag with inside text or html as h1 and option as null and here this option basically an object with key-value pair which is attribute u want to passed to created element
  return React.createElement(

      'div',
      {id:'hello',className:'c1'}, // passing attribure to div tag
      React.createElement('h1',null,'hello AMAN BISHT')

  )

}

export default Hello;

// by above example u can see that creating component by jsx is better then without it thats why we always use JSX , bascially what happening behind each jsx tag and element is calling React.creatElement() method to create itself with child and property mention as attribute that is why while creating jsx and component we always import React 

// MORE DIFFERENCE BTW JSX AND HTML

// ### in HTML       in JSX

//     class          className
//     for             htmlFor
//     onclick         onClick
//     tabindex        tabIndex
