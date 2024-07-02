import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import ServiceSection from './components/ServiceSection';

const App = () => {
  const webServices = [
    {
      imgSrc: 'public/assets/wordpress.svg',
      title: 'Wordpress',
      description:
        'Ótimos designs, recursos poderosos e a liberdade para construir o que você quiser.',
      link: '/deployment/create/wordpress',
    },
    {
      imgSrc: 'public/assets/owncloud.svg',
      title: 'ownCloud',
      description: 'Serviço de armazenamento e sincronização de arquivos',
      link: '/deployment/create/owncloud',
    },
    {
      imgSrc: 'public/assets/minio.svg',
      title: 'MinIO',
      description:
        'Serviço de Object Storage distribuído de alto desempenho, que é projetado para infraestrutura de nuvem privada em larga escala, 100% compativel com bibliotecas que usam S3',
      link: '/deployment/create/minio',
    },
  ];

  const databaseServices = [
    {
      imgSrc: 'public/assets/mariadb.svg',
      title: 'MariaDB',
      description: 'Banco de dados relacional fork do MySQL',
      link: '/deployment/create/mariadb-11',
    },
    {
      imgSrc: 'public/assets/mysql.svg',
      title: 'MySQL',
      description: 'Banco de dados relacional mais popular',
      link: '/deployment/create/mysql',
    },
    {
      imgSrc: 'public/assets/postgresql.svg',
      title: 'PostgreSQL',
      description: 'Banco de dados relacional com foco em desempenho',
      link: '/deployment/create/postgresql',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Escolha um serviço
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Seu serviço terá redundância e load balancer dentro de um cluster
                kubernetes
              </p>
            </div>
            <ServiceSection
              title="Web"
              description="Aplicações web"
              services={webServices}
            />
            <ServiceSection
              title="Banco de Dados"
              description="Instância de bancos de dados"
              services={databaseServices}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
