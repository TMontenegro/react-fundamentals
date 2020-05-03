import React from 'react';
import './style.css';

export default (props) => (
  <>
    <div className='Card'>
      <div className="Title">
        <h1>{props.title}</h1>
      </div>
      <div className="Content">
        <div>{props.children}</div>
      </div>
    </div>
  </>
);
