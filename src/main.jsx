// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyServices from './components/MyServices';
import CreateService from './components/CreateService'; // Importe CreateService

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<MyServices />} />
      <Route path="/deployment/create/wordpress" element={<CreateService serviceType="Wordpress" />} /> {/* Rota para Wordpress */}
      <Route path="/deployment/create/owncloud" element={<CreateService serviceType="ownCloud" />} /> {/* Rota para ownCloud */}
      <Route path="/deployment/create/minio" element={<CreateService serviceType="MinIO" />} /> {/* Rota para MinIO */}
      <Route path="/deployment/create/mariadb-11" element={<CreateService serviceType="MariaDB" />} /> {/* Rota para MariaDB */}
      <Route path="/deployment/create/mysql" element={<CreateService serviceType="MySQL" />} /> {/* Rota para MySQL */}
      <Route path="/deployment/create/postgresql" element={<CreateService serviceType="PostgreSQL" />} /> {/* Rota para PostgreSQL */}
    </Routes>
  </BrowserRouter>
);