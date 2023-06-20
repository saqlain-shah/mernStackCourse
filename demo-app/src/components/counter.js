import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    count === 0 ? setCount(0) : setCount(count - 1);
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Counter App</h1>
      <div style={buttonContainerStyle}>
        <button onClick={handleIncrement} style={buttonStyle}>Increment</button>
      </div>
      <h1 style={countStyle}>{count}</h1>
      <div style={buttonContainerStyle}>
        <button onClick={handleDecrement} style={buttonStyle}>Decrement</button>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '2px solid blue',
  padding: '20px',
  width: '300px',
  margin: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#6BD4F1',
};



const headerStyle = {
  fontSize: '24px',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  height: '50px',
  width: '100px',
  border: 'none',
  borderRadius: '50%',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',

};

const countStyle = {
  fontSize: '50px',
  textAlign: 'center',
};
