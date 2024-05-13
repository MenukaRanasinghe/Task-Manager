import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className='wrapper'>
      <div className={`form ${isLoginForm ? 'login' : 'register'}`}>
        <form action="">
          <h1>{isLoginForm ? 'LOGIN' : 'REGISTER'}</h1>
          {isLoginForm ? (
            <>
              <div className="input-box">
                <input type='email' placeholder='Email or Username' required />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon' />
              </div>
            </>
          ) : (
            <>
              <div className="input-box">
                <input type='text' placeholder='Username' required />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type='email' placeholder='Email' required />
                <FaEnvelope className='icon' />
              </div>
              <div className="input-box">
                <select required>
                 <option value="" disabled selected hidden>Select</option>
                 <option value="Team Lead">Team Lead</option>
                 <option value="Team Member">Team Member</option>
                </select>
              </div>
              <div className="input-box">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon' />
              </div>
              <div className="input-box">
                <input type='password' placeholder='Confirm Password' required />
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
