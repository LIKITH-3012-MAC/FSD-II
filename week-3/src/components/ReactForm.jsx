import React, { useState } from 'react';

export default function ReactForm() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>3.d. Form Handling in React</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '8px' }}>
          <input 
            type="text" name="username" placeholder="Username" 
            value={formData.username} onChange={handleChange} required 
            style={{ padding: '6px', marginRight: '8px' }}
          />
          <input 
            type="email" name="email" placeholder="Email Address" 
            value={formData.email} onChange={handleChange} required 
            style={{ padding: '6px' }}
          />
        </div>
        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>Submit Form</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          <strong>Captured Data:</strong> {submittedData.username} ({submittedData.email})
        </div>
      )}
    </div>
  );
}
