import React from 'react';

// Child Component receiving data via props
function ChildComponent({ message, userDetails }) {
  return (
    <div style={{ background: '#f9f9f9', padding: '10px', marginTop: '10px', borderRadius: '4px' }}>
      <h4>Child Component Area</h4>
      <p>Message from Parent: <em>{message}</em></p>
      <p>User: {userDetails.name} | Role: {userDetails.role}</p>
    </div>
  );
}

// Parent Component
export default function PropsParent() {
  const sharedData = { name: "Likith Naidu", role: "AI-ML Architect" };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>3.c. Data Sharing using Props</h3>
      <ChildComponent message="Hello from the parent layer!" userDetails={sharedData} />
    </div>
  );
}
