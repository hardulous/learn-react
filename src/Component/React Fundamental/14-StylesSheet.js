
import React from 'react';
import './15-styles.css';

// here this is how we import .module.css stylesheet
import S from '../../appStyles.module.css'

const StylesSheet = ( {primary} ) => {

  const styleObj = {

      fontSize:'30px',
      color:'blue',
      textTransform:'uppercase',
      transform: "translate(60px,10px)",
      margin:"0px",
      padding:"0px",
      color: primary?'blue':'black',
  }  

  return (

    <>

      <div>

          {/* using external css file */}
        <h1 className={`${primary?"primary":null} font-x1 `}>StylesSheet</h1>
         
          {/* using inline style object */}
        <h1 style={styleObj}>Inline Css</h1>

          {/* using css module  */}
          <h1 className={`${S.error1} ${S.error2}`} id={S.h1}>Css Module</h1>

      </div>

    </>

  )

};

export default StylesSheet;

// CSS MODULES is also way to style react component with file name extention is must be .module.css ex i have created appStyles.module.css , the advantage of using .module.css way of styling is it avoid classes , id and css conflict while styling the html because if using external css sheet basically classes are held in global scope means if parent is using .css styles then its child component can also directly use this styles without need to import again and again that styleSheet but with .module.css way of style u must need to import obejct of this sheet to use its class , id etc otherwise show error and this will solve problem of css conflict 