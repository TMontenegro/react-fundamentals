import React from 'react';

export default (props) => {
  return (
    <>
      <input
        type='number'
        value={props.amount}
        onChange={(e) => {
          props.handleAmount(+e.target.value);
        }}
      />
      <h1>Amount: {props.amount}</h1>
    </>
  );
};
