import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = ({title, description, services}) => {
    return ( 
        <div className="col-12 md-4">
            <div className="row px-4">
                <h3 style={{fontWeight: "bold"}}>{title}</h3>
                <p className="lead" style={{marginBottom: "1rem"}}>{description}</p>
                <hr />
            </div>
            <div className="row px-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        imgSrc={service.imgSrc}
                        title={service.title}
                        description={service.description}
                        link={`${service.link}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
