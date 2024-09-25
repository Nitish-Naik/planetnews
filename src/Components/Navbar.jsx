import React from 'react';
import Logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src={Logo}        
            alt="NewsMag Logo" 
            width="40" 
            height="40" 
            className="d-inline-block me-2 rounded-circle" 
          />
          <span className="badge bg-light text-dark fs-4 mb-0">PlanetNews</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('technology')}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('business')}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('health')}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('science')}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('sports')}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link category-link" onClick={() => setCategory('entertainment')}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;








































