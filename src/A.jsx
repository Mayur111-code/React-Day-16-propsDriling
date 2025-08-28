import React from 'react'
import B from './B'

const A = (props) => {
  
  const { id, name } = props;

  return (
    <div>
      {/* <h1>This is the A Component</h1>
      <h3>Your id is {id} and your name is {name}</h3> */}

     
      <B id={id} name={name} />
    </div>
  )
}

export default A;
