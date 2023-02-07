import React from 'react';

const ChildComponent = ( { greet } ) => {

  return (

    <div>
        {/* calling method present in parent component and also sending some data to parent method */}
        <button onClick={ ()=>{ greet('CHILD') } }>Greet Parent</button>
    </div>

  )

};

export default ChildComponent;
