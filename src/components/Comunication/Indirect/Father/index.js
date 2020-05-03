import React, { useState } from 'react';
import Son from '../Son/index';

export default (props) => {
  const [value, setValue] = useState(0);

  function handleClick(value) {
    setValue(value);
  }

  return (
    <>
      <Son handleClick={handleClick}></Son>
      <h1>Value: {value}</h1>
    </>
  );
};
