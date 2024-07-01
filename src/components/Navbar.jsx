// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark" style={{ padding: '1px 0' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src='public/assets/logo-only-white.png'
            alt="Logo"
            height="28"
            className="d-inline-block align-text-top"
            style={{ marginRight: '0.5rem' }}
          />
          Marketplace
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: '#fff' }}>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Meus Serviços
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;