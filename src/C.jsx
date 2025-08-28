import React from 'react'
import D from './D';

const C = (props) => {
    const { id, name } = props;
  return (
    <div>
        {/* <h2>This is the B Component</h2>
      <h3>Id: {id} | Name: {name}</h3>  */}

      <D id={id} name={name}/>
    </div>
  )
}

export default C