import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="menu">
        <Link to="/">Main</Link>
        <Link to="/about">About Us</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/finished">Finished</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </div>
  );
};

export default Footer;
