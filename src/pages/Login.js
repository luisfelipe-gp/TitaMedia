import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGlobalApp } from '../context/GlobalContextApp';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
   const { setInfoAuth } = useGlobalApp();
   const navigate = useNavigate(); 

  const handleLoginSuccess = (credentialResponse) => {
    let credentialDecoded = jwt_decode(credentialResponse.credential)
    console.log("credentialDecoded", credentialDecoded);
    setInfoAuth(credentialDecoded)
    navigate('/home');
    
  };

  const handleLoginError = () => {
    console.log('Login Fallido');
  };

  return (
    <div className='container-card'>
      <div className='card'>
      <h2>Tita Media</h2>
      <p>Inicia sesión con Google:</p>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
      </div>
    </div>
  );
};

export default Login;