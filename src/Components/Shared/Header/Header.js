import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid px-5 menubar-area">
                    <Link to="/" className="navbar-brand"><h1>Flash Shoots</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav menu">
                            <Link to="/" className="nav-link active" aria-current="page"><h6>Home</h6></Link>
                            <Link to="/aboutUs" className="nav-link"><h6>About Us</h6></Link>
                            <Link to="/projects" className="nav-link"><h6>Projects</h6></Link>
                            <Link to="/contact" className="nav-link"><h6>Contact</h6></Link>
                            <Link to="/login" className="nav-link"><h6>Login</h6></Link>
                            <Link to="/admin" className="nav-link"><h6>Admin</h6></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;