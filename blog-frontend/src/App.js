import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <nav>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
