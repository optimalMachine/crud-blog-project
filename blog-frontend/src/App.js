import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "./firebase";
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  const [isAuth,setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
    })
  }

  return (
    <Router>
      <nav>
        <h1 className='logo'>My React Blog</h1>
        <Link to='/'>Home</Link>
        { !isAuth ? 
        <Link to='/login'>Login</Link> : 
        <>
          <Link to='/post'>Post</Link>
          <h1 className='logout-button' onClick={signUserOut}>Log Out</h1>
        </>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/post' element={<Post />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>

  );
}

export default App;
