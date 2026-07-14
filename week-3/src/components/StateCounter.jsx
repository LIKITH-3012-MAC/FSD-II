import React, { useState } from 'react';

export default function StateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>3.a. Counter using useState Hook</h3>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '8px 16px', marginLeft: '10px', cursor: 'pointer' }}>
        Decrement
      </button>
    </div>
  );
}
