import React from 'react';
import logo from '../components/images/prime-logo.png';

function LogoContainer() {
    return (
        <div id="home" className="logo-container">
        <div className="support-container">
          <p className="get-support"><i class="fa-solid fa-magnifying-glass"></i> Search</p>
        </div>
        <img className="logo" src={logo} alt="prime-logo" />
        <div className="account-container">
          <p className="account-options"><i className="fa-solid fa-user"></i></p>
          <p className="account-options"><i className="fa-solid fa-heart"></i></p>
          <p className="account-options"><i className="fa-solid fa-cart-shopping"></i></p>
        </div>
      </div>
    );
}

export default LogoContainer