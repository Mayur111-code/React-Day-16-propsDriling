import React from 'react';
import C from './C';

const B = (props) => {
  const { id, name } = props;

  return (
    <div>
      {/* <h2>This is the B Component</h2>
      <h3>Id: {id} | Name: {name}</h3> */}

      <C id={id} name={name}/>
    </div>
  );
};

export default B;
