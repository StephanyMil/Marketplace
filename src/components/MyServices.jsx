import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const MyServices = () => {
    const { t } = useTranslation();
    const [services, setServices] = useState([]); //Inicializa os estados dos serviços

    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem("services")) || [];
        setServices(storedServices); //Atualiza o estado dos serviços com os serviços armazenados no localStorage
    }, []);

    return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <h2>{t("My Services")}</h2>
                    <hr />
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>{t("Uuid")}</th>
                                <th>{t("Service")}</th>
                                <th>{t("Status")}</th>
                                <th>{t("URL")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.uuid}>
                                    <td>
                                        <Link to={`/deployment/details/${service.uuid}`}>{service.uuid}
                                        </Link>
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