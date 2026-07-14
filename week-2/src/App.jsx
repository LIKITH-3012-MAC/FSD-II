import React from 'react';
import CounterClass from './CounterClass';
import CounterFunctional from './CounterFunctional';
import ConditionalRender from './ConditionalRender';
import StringLiterals from './StringLiterals';

function App() {
  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', padding: '20px', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: '#222' }}>
        Basics of React.js — Experiment Part 2
      </h1>
      
      <CounterClass />
      <CounterFunctional />
      <ConditionalRender />
      <StringLiterals />
    </div>
  );
}

export default App;
