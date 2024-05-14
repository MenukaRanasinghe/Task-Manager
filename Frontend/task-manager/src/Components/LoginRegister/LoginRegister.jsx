import React, { useState } from 'react';
import { login, register } from '../../apiService';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const usernameOrEmail = formData.get('usernameOrEmail');
    const password = formData.get('password');
  
    try {
      const data = await login(usernameOrEmail, password);
      setLoginSuccess(true);
      setLoginError(null);
      console.log('Login successful:', data);
    } catch (error) {
      setLoginSuccess(false);
      setLoginError('Invalid username/email or password');
      console.error('Login failed:', error);
    }
  };
  

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const userType = formData.get('userType');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match');
      return;
    }

    try {
      const data = await register(username, email, password, userType);
      setRegisterSuccess(true);
      setRegistrationError(null);
      console.log('Registration successful:', data);
    } catch (error) {
      setRegisterSuccess(false);
      setRegistrationError('Registration failed');
      console.error('Registration failed:', error);
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setLoginSuccess(false);
    setRegisterSuccess(false);
    setRegistrationError(null);
  };

  return (
    <div className='wrapper'>
      <div className={`form ${isLoginForm ? 'login' : 'register'}`}>
        <form onSubmit={isLoginForm ? handleLoginSubmit : handleRegisterSubmit}>
          <h1>{isLoginForm ? 'LOGIN' : 'REGISTER'}</h1>
          {isLoginForm ? (
            <>
              <div className="input-box">
                <input type='email' name='usernameOrEmail' placeholder='Email or Username' required />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type='password' name='password' placeholder='Password' required />
                <FaLock className='icon' />
              </div>
            </>
          ) : (
            <>
              <div className="input-box">
                <input type='text' name='username' placeholder='Username' required />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type='email' name='email' placeholder='Email' required />
                <FaEnvelope className='icon' />
              </div>
              <div className="input-box">
                <select name='userType' required>
                  <option value="" disabled>Select User Type</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Team Member">Team Member</option>
                </select>
              </div>
              <div className="input-box">
                <input type='password' name='password' placeholder='Password' required />
                <FaLock className='icon' />
              </div>
              <div className="input-box">
                <input type='password' name='confirmPassword' placeholder='Confirm Password' required />
                <FaLock className='icon' />
              </div>
            </>
          )}
          {isLoginForm && (
            <div className="remember">
              <label><input type='checkbox' /> Remember Me</label>
              <a href="#"> Forgot password?</a>
            </div>
          )}
          <button type="submit">{isLoginForm ? 'Login' : 'Register'}</button>
          {loginSuccess && isLoginForm && (
            <div className="success-msg">Login success</div>
          )}
          {registerSuccess && !isLoginForm && (
            <div className="success-msg">User registered successfully</div>
          )}
          {loginError && (
            <div className="error-msg">{loginError}</div>
          )}
          {registrationError && (
            <div className="error-msg">{registrationError}</div>
          )}
          <div className="register-link">
            <p>
              {isLoginForm ? "Don't have an account?" : "Already have an account?"}
              <a href="#" onClick={toggleForm}>{isLoginForm ? ' Register' : ' Login'}</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
