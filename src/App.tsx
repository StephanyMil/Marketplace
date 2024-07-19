import "./index.css";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const webServices = [
    {
      imgSrc: "src/assets/wordpress.svg",
      title: "Wordpress",
      description:
        "Great designs, powerful features and the freedom to build whatever you want.",
      link: "/deployment/create/wordpress",
    },
    {
      imgSrc: "src/assets/owncloud.svg",
      title: "ownCloud",
      description: "File storage and synchronization service.",
      link: "/deployment/create/owncloud",
    },
    {
      imgSrc: "src/assets/minio.svg",
      title: "MinIO",
      description: "High-performance distributed object storage service, designed for large-scale private cloud infrastructure, 100% compatible with libraries that use S3.",
      link: "/deployment/create/minio",
    },
  ];

  const databaseServices = [
    {
      imgSrc: "src/assets/mariadb.svg",
      title: "MariaDB",
      description: "Relational database fork of MySQL.",
      link: '/deployment/create/mariadb-11',
    },
    {
      imgSrc: "src/assets/mysql.svg",
      title: "MySQL",
      description: "Most popular relational database",
      link: "/deployment/create/mysql",
    },
    {
      imgSrc: "src/assets/postgresql.svg",
      title: "PostgreSQL",
      description: "Relational database with a focus on performance",
      link: "/deployment/create/postgresql",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
      <Navbar />
      <main style={{ padding: "2rem 0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                {t("Choose a service")}
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                {t("Your service will have redundancy and load balancer inside a Kubernetes cluster")}
              </p>
            </div>
            <ServiceSection
              title={t("Web")}
              description={t("Web Applications")}
              services={webServices}
            />
            <ServiceSection
              title={t("Database")}
              description={t("Database Instances")}
              services={databaseServices}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
