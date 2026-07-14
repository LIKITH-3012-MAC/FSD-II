import React from 'react';

export default function MapIteration() {
  const frameworks = [
    { id: 1, name: 'React.js', type: 'Frontend' },
    { id: 2, name: 'Next.js', type: 'Full-Stack' },
    { id: 3, name: 'Express.js', type: 'Backend' },
    { id: 4, name: 'FastAPI', type: 'AI/Microservices' }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>3.e. Iterative Rendering using map() function</h3>
      <table border="1" cellPadding="6" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eaeaea' }}>
            <th>ID</th>
            <th>Technology</th>
            <th>Domain Stack</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((tech) => (
            <tr key={tech.id}>
              <td>{tech.id}</td>
              <td><strong>{tech.name}</strong></td>
              <td>{tech.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
