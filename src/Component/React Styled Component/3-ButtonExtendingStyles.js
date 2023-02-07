
import React from 'react'
import styled from 'styled-components'
import StyledButton from './2-ButtonWithPropsStyledComponent'

// DEFINING STYLED BUTTON COMPONENT BY INHERTING STYLES OF OTHER BUTTON COMPONENT:
const ExtendedButton = styled(StyledButton)`

  background-image: linear-gradient(to right ,yellow 0% , orange 100%);
  border: none;

`

export default ExtendedButton

// Sometime in our app we want to create a new component with style similar to any pre-existing component style and override only few style of new component , so to avoid re-writing same css code styled component give us feature of extending styles 

// To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor and inside () pass the styled component whose style u want to re-use 

// another feature of this styled component library is to provide polymorphic props that is as = 'a' and now this ButtonExtending component become anchor tag in DOM 