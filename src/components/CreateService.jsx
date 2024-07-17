import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {v4 as uuidv4} from 'uuid';
import { useTranslation } from "react-i18next";

const CreateService = () => {
    const {t} = useTranslation(); //Obter a função de tradução
    const {serviceType} = useParams(); //Obter o serviceType da URL
    const navigate = useNavigate(); //Obter a função de navegação

    const handleSubmit = (event) => {
        event.preventDefault(); //Previne o comportamento padrão do formulário
        
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
                    <h2>{t("Create service")} {serviceType}</h2>
                    <hr />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <p className="lead pb-3">
                        {t("Please fill in the required information to create the service.")}
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
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="subdomain" className="form-label">
                                {t("Subdomain")}:
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
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="user" className="form-label">
                                {t("User name:")}
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
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="password" className="form-label">
                                {t("User password:")}
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
                        <div className="col-12 col-md-6 mb-3">
                            <label htmlFor="passwordConfirmation" className="form-label">
                                {t("Confirm your password:")}
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
                    </div>
                    <div className="col-12 col-xl-3 mb-3">
                        <label htmlFor="storage" className="form-label">
                            {t("Data volume size:")}
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
                            <i className="bi bi-rocket-takeoff"></i> {t("Create my")}{" "}
                            {serviceType}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateService;
