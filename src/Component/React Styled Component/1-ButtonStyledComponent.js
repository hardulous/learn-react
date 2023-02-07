
import React from 'react'
import styled from 'styled-components'

// DEFINING STYLED BUTTON COMPONENT:
const StyledButton = styled.button`

   border: 2px solid red;
   background-color: black;
   color: white;
   padding: 10px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   cursor: pointer;

`


const ButtonStyledComponent = () => {

  return (

    <>
    
      <button>Button</button>

      {/* To use Styled component just invoke it as normal react component */}
      <StyledButton>Styled Button</StyledButton>

    </>

  )

}

export default ButtonStyledComponent

// NOTE : here both plain css and styled component can work together without any problem 

// to make styled component we have some steps :

// 1. import styled function from styled-components package 
// 2. we define a component with styles using this styled function
// 3. styled function have all html tag we can modify by using . operator and after this write css inside ` ` back tick EX:

// styled.h1` write your css `
