import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import NavBar from './components/NavBar'
import FoodItem from './components/FoodItem'

function App() {
  return (
    <div className="App">
      <Router> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addfood" element={<FoodItem/>} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
