import React from 'react';

const Persons = ( { cv } ) => {

  return (

    <li>{`i am ${cv.name} i am ${cv.age} old and i am proficient in ${cv.skill}`}</li>
  )

};

export default Persons;
