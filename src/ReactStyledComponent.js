import React from 'react'
import ButtonStyledComponent from './Component/React Styled Component/1-ButtonStyledComponent'
import StyledButton from './Component/React Styled Component/2-ButtonWithPropsStyledComponent'
import ExtendedButton from './Component/React Styled Component/3-ButtonExtendingStyles'

const ReactStyledComponent = () => {

  return (

    <>
    

      <h1 style={{textAlign:"center",color:"royalblue"}}>React Styled Component</h1>

      {/* Styled Button */}
      <ButtonStyledComponent/>

      <br /> <br />

      {/* Styled Component Based on Props */}
      <StyledButton>Without Props</StyledButton>
      
      <br /> <br />

      <StyledButton variant='outline'>With Props</StyledButton>

      <br /> <br />
      
      {/* Extending Styles , here by this polymorphic prop that is as = 'a' my component even is a button but will be display as anchor tag in DOM */}
      <ExtendedButton as='a'>Extended Button</ExtendedButton>  
      
      <br /> <br />


       
    </>

  )

}

export default ReactStyledComponent

// ########### React Styled Component

// Styled Component is a CSS - in - JS styling solution for React and React Native , it uses tagged template literals which allow your to write plain CSS that is scopped to a simgle component inside your JS code 

// ########## Features/Benefits

// 1. Automatic critical CSS by which this library know which component are rendered on the screen and injects only their styles by which it execute only least amount of code

// 2. No class name bug , the library genrate unique class name for every styles so never dublication of class name take place

// 3. if working on large project which have plain CSS file then to delete some un-used style is very difficult to find out so for this in styled component every style tied to a specific component if a component is un-used then deleting that component will also delete that component style as well 

// 4. Dynamic Styles , in component we have props which make our app dynamic in nature and these props can also be used to make dynamic style 

// 5. Painless Maintenance , by these it is very easy to maintain Component style and we dont have to look to many files searching for style that is effecting out component CSS

// ######## WEBSITE DOCS: https://styled-components.com/ #########

// install vscode-styled-components extension , install styled component library by command : npm install styled-components 

// 