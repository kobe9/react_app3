import React from 'react';


import './style.scss';

function Child (props) {

  console.log('child component');

  return (   
    <div className="child">
      <h1> Hello Child</h1>
      {props.count}
    </div>
  );
}

export default Child;
