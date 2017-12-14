import React from 'react';
import '../styles/Login.css';
import LoginPanel from '../components/LoginPanel';

export default () => (
  // apply background to container
  <div className="login-container">
    <a className="logo" href="/">Reactor</a>
    <LoginPanel/>
  </div>
);