import "./index.css";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const webServices = [
    {
      imgSrc: "src/assets/wordpress.svg",
      title: "wordpress",
      description:
        "wordpress_description",
      link: "/deployment/create/wordpress",
    },
    {
      imgSrc: "src/assets/owncloud.svg",
      title: "owncloud",
      description: "owncloud_description",
      link: "/deployment/create/owncloud",
    },
    {
      imgSrc: "src/assets/minio.svg",
      title: "minio",
      description: "minio_description",
      link: "/deployment/create/minio",
    },
  ];

  const databaseServices = [
    {
      imgSrc: "src/assets/mariadb.svg",
      title: "mariadb",
      description: "mariadb_description",
      link: '/deployment/create/mariadb-11',
    },
    {
      imgSrc: "src/assets/mysql.svg",
      title: "mysql",
      description: "mysql_description",
      link: "/deployment/create/mysql",
    },
    {
      imgSrc: "src/assets/postgresql.svg",
      title: "postgresql",
      description: "postgresql_description",
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
                {t("choose_service")}
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                {t("service_has_redundancy")}
              </p>
            </div>
            <ServiceSection
              title={t("web")}
              description={t("web_description")}
              services={webServices}
            />
            <ServiceSection
              title={t("database")}
              description={t("database_description")}
              services={databaseServices}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
