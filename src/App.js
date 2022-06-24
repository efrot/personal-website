import './App.css';
import React from 'react';
import ParticleBackground from './ParticleComponent/ParticleBackground';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

const App = () => {
  return (
    <div className='main'>
      <NavBar />
      <Home />
      <ParticleBackground />
    </div>
  );
}

export default App;
