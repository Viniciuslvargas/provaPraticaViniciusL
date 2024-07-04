import React from 'react';
import Header from './Componentes/Header';
import Clubs from './Componentes/Clubs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Clubs />
      </main>
    </div>
  );
}

export default App;