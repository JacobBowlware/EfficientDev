import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <div className="navbar-container fixed-top">
            <nav className="navbar navbar-expand-lg" id="here">
                <a className="navbar-brand" href="/#hero">
                    Efficient<span className="text-highlight">Dev</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={navbarOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={toggleNavbar}
                >
                    <FontAwesomeIcon
                        className="navbar-toggler-icon"
                        icon={navbarOpen ? faTimes : faBars}
                    ></FontAwesomeIcon>
                </button>
                <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/blogs/frontend/" onClick={toggleNavbar}>
                                Front-End
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs/backend/" onClick={toggleNavbar}>
                                Back-End
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/blogs/productivity/" onClick={toggleNavbar}>
                                Productivity
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" onClick={toggleNavbar}>
                                Other
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
