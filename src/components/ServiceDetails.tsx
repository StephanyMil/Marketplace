import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

interface Service {
    uuid: string;
    service: string;
    subdomain: string;
    user: string;
    status: string;
    url: string;
}

const ServiceDetails: React.FC = () => {
    const { t } = useTranslation();
    const { uuid } = useParams<{ uuid: string }>();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedServices: Service[] = JSON.parse(localStorage.getItem("services") || "[]");
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
                    <div className="alert alert-info">{t("Loading...")}</div>
                </div>
            </main>
        );
    }

    if (!service) {
        return (
            <main>
                <Navbar />
                <div className="container-fluid mt-4">
                    <div className="alert alert-danger">{t("Service not found")}</div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <h2>{t("Create service")} {service.service}</h2>
                    <p className="lead">{t("Instance: ") + service.uuid}</p>
                    <hr />
                </div>
                <div className="row align-items-start">
                    <div className="col-md-6">
                        <h3>Status</h3>
                        <div className="alert alert-info">
                            {t("Your instances are being created")}
                        </div>
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>{t("Resources status")}</th>
                                        <th>{t("Current")}</th>
                                        <th>{t("Desired")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("Instances:")}</td>
                                        <td>0</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>{t("Cluster status")}</h3>
                        <div className="alert alert-success">
                            {t("Cluster is operating normally")}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>{t("Details")}</h3>
                        <dl className="row">
                            <dt className="col-sm-3">{t("Service")}:</dt>
                            <dd className="col-sm-9">{service.service}</dd>
                            
                            <dt className="col-sm-3">{t("Uuid")}:</dt>
                            <dd className="col-sm-9">
                                <a href={service.url}>{service.url}</a>
                            </dd>

                            <dt className="col-sm-3">{t("Port(s)")}:</dt>
                            <dd className="col-sm-9">80/443</dd>

                            <dt className="col-sm-3">{t("Cluster")}:</dt>
                            <dd className="col-sm-9">SP1</dd>
                        </dl>
                    </div>
                    <hr />
                    <h3>{t("Service logs")}</h3>
                    <div className="alert"></div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetails;
