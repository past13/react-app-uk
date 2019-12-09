import React, { Fragment } from 'react';
import facebookicon from './../../assets/facebook-icon.svg';

import './Login.css';

export default function Login() { 
    return ( 
        <Fragment>
            <div className="logo">LOGO</div> 
            <div className="login-container">
                <div className="logo"></div> 
            <div className="fields"> 
                <div className="email"> 
                    <div className="email-label">
                        <a>Email</a>
                    </div> 
                    <input className="email-input" type="email" placeholder="Email" /> 
                </div> 
                <div className="password"> 
                    <div className="password-label">Password</div> 
                    <input className="password-input" type="password" placeholder="Password" /> 
                </div> 
                <div className="forgot-password"> 
                    <a href="#">Forgot your password?</a> 
                </div> 
            </div> 
                <button className="button login-button">Log in</button> 
                <button className="button login-button">    
                    <img className="facebook-icon" src={facebookicon} alt="" /> 
                    Sign in with facebook 
                </button> 
            </div> 
        </Fragment> 
    )
}