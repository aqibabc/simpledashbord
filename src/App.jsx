import React from 'react';
import './App.css'
import Header from './Header';
import Sidbar from './Sidbar';
import Home from './Home';

function App() {


  return (
    <>
      <div className="grid-container">
        <Header />
        <Sidbar />
        <Home />
      </div>
    </>
  )
}

export default App
