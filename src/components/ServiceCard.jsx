import { useTranslation } from "react-i18next";

const ServiceCard = ({ imgSrc, title, description, link }) => {
  const { t } = useTranslation();
  return (
    <div className="col-12 col-lg-3 col-xxl-2 py-2">
      <div
        className="card h-100"
        style={{
          border: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          className="card-img-top p-4"
          src={imgSrc}
          alt={title}
          height="128"
          style={{ backgroundColor: 'white' }}
        />
        <div className="card-body">
          <h5 className="card-title text-center" style={{fontWeight: 'bold'}}>{t(title)} </h5>
          <p className="card-text text-center small py-2">{t(description)}</p>
        </div>
        <div className="card-footer">
          <a
            href={link}
            className="btn btn-success w-100"
            style={{ color: '#fff' }}
          >
            <i className="bi bi-rocket-takeoff"></i> {t("Create my")} {t(title)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
