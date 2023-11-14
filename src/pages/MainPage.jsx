import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Import the background image

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <div className="logo">Logo</div>
        <div className="menu">
          <NavLink to="/" activeClassName="active">Main</NavLink>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
          <NavLink to="/news" activeClassName="active">News</NavLink>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <NavLink to="/finished" activeClassName="active">Finished</NavLink>
          <NavLink to="/contacts" activeClassName="active">Contacts</NavLink>
        </div>
      </header>
      <section className="hero-section" style={{ backgroundImage: `url(${require('../assets/background.jpg').default})` }}>
        <div className="hero-content">
          <h2>Welcome to My Awesome Website</h2>
          <p>Discover amazing content and explore our diverse range of services and news articles.</p>
        </div>
      </section>
      <section className="featured-content">
        {/* ... */}
      </section>
      <section className="call-to-action">
        {/* ... */}
      </section>
    </div>
  );
};

export default MainPage;
