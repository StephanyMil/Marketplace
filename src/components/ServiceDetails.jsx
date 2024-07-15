import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
    const { t } = useTranslation();
    const {uuid} = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem("services")) || [];
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
            <div className="alert alert-info">{t("loading")}</div>
            </div>
        </main>
        );
    }

    if (!service) {
        return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
            <div className="alert alert-danger">{t("service_not_found")}</div>
            </div>
        </main>
        );
    }

    return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <h2>{t("create_service")} {service.service}</h2>
                    <p className="lead"> {t("instance")} {service.uuid}</p>
                    <hr />
                </div>
                <div className="row align-itens-start">
                    <div className="col-md-6">
                        <h3>Status</h3>
                        <div className="alert alert-info">
                            {t("instance_creation")}
                        </div>
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>{t("resources_status")}</th>
                                        <th>{t("current")}</th>
                                        <th>{t("desired")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("instances")}</td>
                                        <td>0</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>{t("cluster_status")}</h3>
                        <div className="alert alert-success">
                            {t("cluster_operating_normally")}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>{t("details")}</h3>
                        <dl className="row">
                            <dt className="col-sm-3">{t("service")}:</dt>
                            <dd className="col-sm-9">{service.service}</dd>
                            
                            <dt className="col-sm-3">{t("uuid")}:</dt>
                            <dd className="col-sm-9">
                                <a href={service.url}>{service.url}</a>
                            </dd>

                            <dt className="col-sm-3">{t("port")}</dt>
                            <dd className="col-sm-9">80/443</dd>

                            <dt className="col-sm-3">{t("cluster")}</dt>
                            <dd className="col-sm-9">SP1</dd>
                        </dl>
                    </div>
                    <hr />
                    <h3>{t("service_logs")}</h3>
                    <div className="alert"></div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetails;
