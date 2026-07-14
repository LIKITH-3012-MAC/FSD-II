import React, { useState } from 'react';

export default function CounterFunctional() {
  // Initializing state using hook in functional component (Exp 2.b)
  const [count, setCount] = useState(0);

  // 2.c: Explicit click event handler function
  const handleButtonClick = () => {
    setCount(count + 1);
    console.log(`Button clicked! New count context is: ${count + 1}`);
  };

  return (
    <div style={{ border: '2px solid #007BFF', padding: '20px', margin: '15px 0', borderRadius: '8px' }}>
      <h2>Exp 2.b & 2.c: Functional Component & Event Handling</h2>
      <p>Current Count: <strong style={{ fontSize: '18px' }}>{count}</strong></p>
      <button 
        onClick={handleButtonClick}
        style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Click to Increment
      </button>
    </div>
  );
}
