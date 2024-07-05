import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {v4 as uuidv4} from 'uuid';

const CreateService = () => {
    const {serviceType} = useParams(); //Obter o serviceType da URL
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const uuid = uuidv4();
        const formData = new FormData(event.target);
        const newService = {
            uuid,
            service: serviceType,
            subdomain: formData.get("subdomain"),
            user: formData.get("user"),
            status: "0",
            url: `${formData.get("subdomain")}.opendata.center`,
        };

        // Salvar o novo serviço no localStorage
        const services = JSON.parse(localStorage.getItem("services")) || [];
        localStorage.setItem("services", JSON.stringify([...services, newService]));

        // Redirecionar para a página de detalhes do serviço
        setTimeout(() => {
            navigate(`/deployment/details/${uuid}`, {
                state: newService,
            });
        }, 500);
    };
    
    return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
                <div className="row">
                    <h2>Criação de serviço {serviceType}</h2>
                    <hr />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <p className="lead pb-3">
                        Por favor preencha as informações obrigatórias para a criação do serviço.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    action={`/deployment/create/${serviceType}`}
                    method="post"
                    className="row gy-2"
                >
                    <imput
                        type="hidden"
                        name="token"
                        value="75MUShttvFVBQHcUZDAR9Vad5kjoWA929wYOgA7z"
                        autoComplete="off"
                    />
                    <div className="col-12 col-xl-6 mb-3">
                        <label htmlFor="subdomain" className="form-label">
                            Subdomínio
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="subdomain"
                                name="subdomain"
                                className="form-control"
                                required
                                autoComplete="off"
                            />
                            <div className="input-group-text">.opendata.center</div>
                        </div>
                        <div id="subdomainHelp" className="form-text">
                            Informe o nome do subdomínio do seu serviço, {" "}
                            <a href="#">precisa utilizar um domínio seu?</a>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                        <label htmlFor="user" className="form-label">
                            Nome de usuário:
                        </label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            className="form-control"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                        <label htmlFor="password" className="form-label">
                            Senha do usuário:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                        <label htmlFor="passwordConfirmation" className="form-label">
                            Confirme a sua senha:
                        </label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            className="form-control"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                        <label htmlFor="storage" className="form-label">
                            Tamanho do volume de dados:
                        </label>
                        <div className="input-group">
                            <input
                                type="number"
                                min="5"
                                max="30"
                                className="form-control"
                                id="storage"
                                value="5"
                                required
                                autoComplete="off"
                            />
                            <div className="input-group-text">GB</div>
                        </div>
                    </div>
                    <div className="col-12"/>
                    <div className="col-12 col-lg-6 col-xl-3 mb-3">
                        <button type="submit" className="btn btn-lg btn-success w-100">
                            <i className="bi bi-rocket-takeoff"></i> Criar meu{" "}
                            {serviceType}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateService;
