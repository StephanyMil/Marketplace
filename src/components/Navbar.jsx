import { Link } from "react-router-dom";
import logo from "../assets/logo-only-white.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="navbar bg-primary" data-bs-theme="dark" style={{padding: "0.1rem 0"}}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img 
                        src={logo} 
                        alt="logo" 
                        height="28" 
                        style={{marginRight: "0.5rem"}}
                        />
                    Marketplace
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: "16px", color: "#fff"}}>
                    <li className="nav-item">
                        <Link to="/deployment" className="nav-link">{t("my_services_navbar")}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
