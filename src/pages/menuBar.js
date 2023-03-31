import React, {Fragment} from 'react';
/*
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
*/
import logo from '../img/Trin-icon.png';
function MenuBar(){
    return(
        <Fragment>
            <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-xl navbar-light bg-light">
                    <a className="navbar-brand" href="index">
                        
                        <img src={logo} alt="Tiger" height="60%" width="20%"/>
                        <h1 className="tm-site-title mb-0">Dashboard</h1>
                    </a>
                    <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index">Dashboard
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="products">Browser</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="accounts">Profile</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Settings
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Idk</a>
                                    <a className="dropdown-item" href="#">Something</a>
                                    <a className="dropdown-item" href="#">Useful</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link d-flex" href="login">
                                    <i className="far fa-user mr-2 tm-logout-icon"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        </Fragment>
    )
}

export default MenuBar;

