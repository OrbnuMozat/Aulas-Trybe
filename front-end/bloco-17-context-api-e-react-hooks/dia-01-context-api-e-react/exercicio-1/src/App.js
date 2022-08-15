import React from 'react';
import './App.css';
import Cars from './Cars';
import Creator from './context/providerCreator';

function App() {
  return (
    <Creator>
      <Cars />
    </Creator>
  );
}

export default App;
