
import React from 'react';
import ReactDom from 'react-dom';

const Portals = () => {

    //  here this component eventhough remain same in react hierarcy but in DOM appear as child of portal id div not root id div 
  return ReactDom.createPortal( 
  
  <>
 
    <h1>Portals Demo</h1>

  </> , document.getElementById('portal'))

};

export default Portals;

// using portal ReactDom.createPortal( component or jsx to be rendered , DOM node ); , go to website for more example , https://reactjs.org/docs/portals.html

// it is used mostly to deal with parent css to understand go to video of portal , this avoid problem of parent overflow:hidden property because with this , there might be case that child component width is more than parent component like pop up window and modal so by putting this component in different DOM node will solve this problem 