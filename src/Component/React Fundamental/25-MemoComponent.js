import React from 'react';

const MemoComponent = ( {name} ) => {

    console.log("Memo Component is rendered")

  return (

    <>

      <h1>{name}</h1>

    </>

  )

};

export default React.memo(MemoComponent);

// pure component in Function based component using React.memo(component to be made pure) as name props is not getting changed so we can make this component as pure , what react.memo() do is accept a component add something to it and return a new enhanced component which is capable of avoiding unnecessary re-render calls 