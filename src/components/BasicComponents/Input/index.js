import React, { useState } from 'react';

export default (props) => {
  const [name, setName] = useState('Tales');

  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </>
  );
};
