import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

const ServiceSection = ({ title, description, services }: { title: string, description: string, services: any[] }) => {
    const { t } = useTranslation();
    return (
        <div className="col-12 md-4">
            <div className="row px-4">
                <h3 style={{ fontWeight: "bold" }}>{t(title)}</h3>
                <p className="lead" style={{ marginBottom: "1rem" }}>{t(description)}</p>
                <hr />
            </div>
            <div className="row px-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title} // Use service.title como key
                        imgSrc={service.imgSrc}
                        title={t(service.title)}
                        description={t(service.description)}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
