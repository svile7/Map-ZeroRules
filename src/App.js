import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home-component';
import MapSite from './components/map/map.components'
function App() {
  return (
    <Router>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapSite />} />
      </Routes>
    
    </Router>
    
  );
}

export default App;
