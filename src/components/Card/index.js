import React from 'react';
import './style.css';

export default (props) => (
  <>
    <div className='Card' style={{ borderColor: props.color || '#000' }}>
      <div className='Title' style={{ backgroundColor: props.color || '#000' }}>
        <h1>{props.title}</h1>
      </div>
      <div className='Content'>
        <div>{props.children}</div>
      </div>
    </div>
  </>
);
