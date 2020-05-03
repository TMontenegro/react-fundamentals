import React from 'react';

export default (props) => {
  function isEven() {
    return props.number % 2 === 0;
  }
  return (
    <>
      <h2>The number: {props.number}</h2>
      {isEven() ? <h3>Is even</h3> : <h3>Is odd</h3>}
    </>
  );
};
