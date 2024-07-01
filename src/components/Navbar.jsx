// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark" style={{ padding: '1rem 0' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/home" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src='public/assets/logo-only-white.png'
            alt="Logo"
            height="28"
            className="d-inline-block align-text-top"
            style={{ marginRight: '0.5rem' }}
          />
          Marketplace
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: '#fff' }}>
          <li className="nav-item">
            <a className="nav-link" href="/sevices">
              Meus Serviços
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
