import React from 'react';
import './LoginRegister.css';
import { FaUser , FaLock } from "react-icons/fa";
import loginImage from '../Assets/login.png';


const LoginRegister = () => {
  return (
    <div className='wrapper'>
      <div className="image">
        <img src={loginImage} alt="bg" />
      </div>
      <div className="form login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type='email' placeholder='Email' required></input>
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password' required></input>
            <FaLock className='icon' />
          </div>
          <div className="remember">
           <label> <input type='checkbox' ></input> Remember Me </label>
           <a href="#" > Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? 
              <a href="#"> Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister