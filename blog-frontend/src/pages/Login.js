import React from "react";
import './Login.css';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from './Home';

function Login({ setIsAuth }) {

  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem('isAuth',true);
      setIsAuth(true);
      console.log('hello')
      navigate('/');
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign in with Google to continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login;