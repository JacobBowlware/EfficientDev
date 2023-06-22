import { useState } from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <div className="navbar-container fixed-top">
            <nav className="navbar navbar-expand-lg ">
                <Link className="navbar-brand" to="/#hero">Efficient<span className="text-highlight">Dev</span></Link>
                <button
                    className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <FontAwesomeIcon className="navbar-toggler-icon" icon={navbarOpen ? faXmark : faBars}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Front-End</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Back-End</a>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Productivity</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Other</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;