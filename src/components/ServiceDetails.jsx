// src/components/ServiceDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ServiceDetails = () => {
  const { uuid } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    const serviceDetails = storedServices.find((s) => s.uuid === uuid);

    if (serviceDetails) {
      setService(serviceDetails);
    }

    setLoading(false);
  }, [uuid]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="container-fluid mt-4">
          <div className="alert alert-info">Carregando...</div>
        </div>
      </main>
    );
  }

  if (!service) {
    return (
      <main>
        <Navbar />
        <div className="container-fluid mt-4">
          <div className="alert alert-danger">Serviço não encontrado</div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="row">
          <h2>
            Detalhes da criação do serviço {service.serviceType}
          </h2>
          <p className="lead">Instância: {service.uuid}</p>
          <hr />
        </div>
        <div className="row align-items-start">
          <div className="col-md-6">
            <h3>Status</h3>
            <div className="alert alert-info">
              Suas instâncias estão sendo criadas
            </div>
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Status dos recursos</th>
                    <th>Atual</th>
                    <th>Desejado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Instâncias:</td>
                    <td>0</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Status do cluster</h3>
            <div className="alert alert-success">
              Cluster está operando normalmente
            </div>
          </div>
          <div className="col-md-6">
            <h3>Detalhes</h3>
            <dl className="row">
              <dt className="col-sm-3">Serviço:</dt>
              <dd className="col-sm-9">{service.serviceType}</dd>

              <dt className="col-sm-3">URL:</dt>
              <dd className="col-sm-9">
                <a href={service.url}>{service.url}</a>
              </dd>

              <dt className="col-sm-3">Porta(s):</dt>
              <dd className="col-sm-9">80/443</dd>

              <dt className="col-sm-3">Cluster:</dt>
              <dd className="col-sm-9">SP1</dd>
            </dl>
          </div>
          <hr />
            <h3>Logs das instâncias</h3>
            <div className="alert">
            </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;