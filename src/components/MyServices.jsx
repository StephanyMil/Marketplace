import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const MyServices = () => {
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