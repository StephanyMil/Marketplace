import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyServices from './components/MyServices';
import CreateService from './components/CreateService';
import ServiceDetails from './components/ServiceDetails'; // Importe ServiceDetails

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<MyServices />} />
      <Route path="/deployment/create/:serviceType" element={<CreateService />} />
      <Route path="/deployment/details/:uuid" element={<ServiceDetails />} /> {/* Nova rota para detalhes do serviço */}
    </Routes>
  </BrowserRouter>
);
 