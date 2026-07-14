import React from 'react';
import StateCounter from './components/StateCounter';
import UseEffectFetch from './components/UseEffectFetch';
import PropsParent from './components/PropsParent';
import ReactForm from './components/ReactForm';
import MapIteration from './components/MapIteration';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>PBR VITS - FSD-II Lab Workspace</h2>
        <p><strong>Week-3 Architecture:</strong> Important Concepts of React.js (All Tasks a to e)</p>
      </header>

      <main>
        <StateCounter />
        <UseEffectFetch />
        <PropsParent />
        <ReactForm />
        <MapIteration />
      </main>
      
      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
        Vite + React Core Engine Active.
      </footer>
    </div>
  );
}

export default App;
