import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyServices from './components/MyServices';
import CreateService from './components/CreateService';
import ServiceDetails from './components/ServiceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/*Adicionar a rota para a página principal */}
      <Route path="/deployment" element={<MyServices />} /> {/*Adicionar a rota para a página de criação de serviço */}
      <Route
        path="/deployment/create/:serviceType"
        element={<CreateService serviceType={':serviceType'} />}
      /> {/*Adicionar a rota para a página de detalhes do serviço*/}
      <Route path="/deployment/details/:uuid" element={<ServiceDetails />} /> {/*Adicionar a rota para a página de detalhes do serviço*/}
    </Routes>
  </BrowserRouter>
);
