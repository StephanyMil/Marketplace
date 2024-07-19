// main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyServices from './components/MyServices';
import CreateService from './components/CreateService';
import ServiceDetails from './components/ServiceDetails';
import i18next from './i18';

// Inicialize o i18next
i18next.init().then(() => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/deployment" element={<MyServices />} />
            <Route path="/deployment/create/:serviceType" element={<CreateService />} />
            <Route path="/deployment/details/:uuid" element={<ServiceDetails />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});