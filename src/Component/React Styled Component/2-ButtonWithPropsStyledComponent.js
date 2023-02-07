
import React from 'react'
import styled from 'styled-components'

// DEFINING STYLED BUTTON COMPONENT BASED ON PROPS:
const StyledButton = styled.button`

   border: 2px solid green;

   background-color: ${(props)=> props.variant==='outline'?'white':'green'};

   color: ${(props)=> props.variant==='outline'?'green':'white'};

   padding: 10px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   cursor: pointer;

`
export default StyledButton;

// here for background color and color property we have used function using interpolation which then return same value based on props passed to that component which is then applied as style 

// the styled component automatically passed component props to this function used inside template literal ${}