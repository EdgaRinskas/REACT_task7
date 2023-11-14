import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="menu">
        <Link to="/">Main</Link>
        <Link to="/about">About Us</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/finished">Acomplished</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </div>
  );
};

export default Header;
