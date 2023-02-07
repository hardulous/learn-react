import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import  ReactFundamental from './ReactFundamental';
import ReactHooks from './ReactHooks';
import ReactRendering from './ReactRendering';
import ReactRouter from './ReactRouter';
import ReactStyledComponent from './ReactStyledComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>

    {/* @@@@@@@@ 1.React Fundamental Topics Covered */}

    {/* <ReactFundamental/> */}

    {/* @@@@@@@@ 2. React Hooks Topics Covered */}

    <ReactHooks/>

    {/* @@@@@@@@@ 3. React Rendering behaviour */}
    
    {/* <ReactRendering/> */}

    {/* @@@@@@@@@ 4. React Router */}

    {/* Here to use All React-Router feature wrap your root component that is App component with Component BrowserRouter from react-router-dom and this component will allow us to connect our url in browser with our react app components 
    */}
    {/* here now i can use all react-router feature in app component tree */}
    {/* <BrowserRouter>

      <ReactRouter/>
     
    </BrowserRouter> */}

    {/* @@@@@@@@@ 5. React Styled Component */}
    {/* <ReactStyledComponent/> */}

  </React.StrictMode>,
  document.getElementById('root')
  
);

// here before react version 17 because of strict mode in development every component render 2 times but does not render 2 times in production 

reportWebVitals();
