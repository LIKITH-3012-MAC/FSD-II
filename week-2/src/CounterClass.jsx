import React, { Component } from 'react';

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    // Initializing state in a class component
    this.state = { count: 0 };
  }

  render() {
    return (
      <div style={{ border: '2px solid #4CAF50', padding: '20px', margin: '15px 0', borderRadius: '8px' }}>
        <h2>Exp 2.a: Class Component Counter</h2>
        <p>Current Count: <strong style={{ fontSize: '18px' }}>{this.state.count}</strong></p>
        <button 
          onClick={() => this.setState({ count: this.state.count + 1 })}
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}
