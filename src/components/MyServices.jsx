// src/components/MyServices.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const MyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {

    const mockServices = [
      {
        uuid: '741e6035-efc7-4280-9138-c3c536c810f6',
        service: 'MariaDB',
        status: 0,
        url: '',
      },
      {
        uuid: 'de1892b1-5471-4b86-acea-449a9a2267e5',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '1983c640-84a9-4a3f-b52e-88a5ff41974a',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '1ffdeb90-4a75-41bb-bd9f-5ff105a9dfc7',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '1a094fb5-61fb-42cc-af79-dba7df965874',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: 'fd7344ab-e7bd-457e-885e-a789686d883e',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '449a533b-f45c-446a-8d89-c9e9b951606e',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '7d34c422-1359-4a4a-a220-9c51a1f96549',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: '05719fae-f97a-4b86-8c45-c98a8925dfae',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
      {
        uuid: 'f75eefec-5719-41d0-9b46-e672ec97e755',
        service: 'Wordpress',
        status: 0,
        url: '',
      },
    ];
    setServices(mockServices);
  }, []);

  return (
    <main>
        <Navbar />
        <div className="container-fluid mt-4">
            <div className="row">
            <h2>Meus serviços</h2>
            <hr />
            </div>
            <div className="col-12">
            <table className="table">
                <thead>
                <tr>
                    <th>Uuid</th>
                    <th>Serviço</th>
                    <th>Status</th>
                    <th>URL</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service.uuid}>
                    <td>
                        <a href={`/deployment/d/${service.uuid}`}>
                        {service.uuid}
                        </a>
                    </td>
                    <td>{service.service}</td>
                    <td>{service.status}</td>
                    <td>{service.url}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </main>
    );
};

export default MyServices;