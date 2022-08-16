import React, { useState } from 'react';
import './login.scss';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='login'>
        <div className="login__container">
            <h2 className='login__container__title'>Welcome</h2>
            <div className="login__container__input">
                <input 
                    type='text'
                    placeholder='Email'
                    autoComplete='off'  
                />
                <input 
                    type='password'
                    placeholder='Password'
                    autoComplete='new-password'
                />
            </div>
            <div className="login__container__button">
                <button className='login__container__button__login'>Log In</button>
                <div className="login__container__button__or">or log in with</div>
                <hr className='login__container__button__rule'/>
                <div className="login__container__button__icon">
                    <FaFacebook/>
                    <FaGoogle/>
                    <FaTwitter/>
                </div>
                <div className="login__container__button__forgot">forgot password?</div>
                <div className="login__container__button__signup">don't have an account?</div>
            </div>
        </div>
    </div>
  )
}

export default Login;