import React, { useState } from 'react';

export default function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ border: '2px solid #FF9800', padding: '20px', margin: '15px 0', borderRadius: '8px' }}>
      <h2>Exp 2.d: Conditional Rendering</h2>
      
      <div style={{ marginBottom: '15px' }}>
        {/* 2.d: Conditional block evaluation using ternary operator */}
        {isLoggedIn ? (
          <div style={{ padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
            🎉 Welcome back, User! Secure Dashboard Access Granted.
          </div>
        ) : (
          <div style={{ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
            🔒 Please log in to access your student terminal profile.
          </div>
        )}
      </div>

      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: '8px 16px', backgroundColor: '#e7e7e7', color: 'black', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
      >
        Toggle Login Status
      </button>
    </div>
  );
}
