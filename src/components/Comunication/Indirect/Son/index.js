import React from 'react';

export default (props) => (
  <>
    <button
      onClick={() => {
        props.handleClick(Math.random());
      }}
    >
      Generate random value
    </button>
  </>
);
