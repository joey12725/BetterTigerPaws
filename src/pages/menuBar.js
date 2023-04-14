import React, {Fragment} from 'react';
/*
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
*/
import logo from '../img/Trin-icon.png';
import {Link, Navigate} from 'react-router-dom';
import { Auth, signout} from 'aws-amplify';

async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
      <Navigate to="/login" replace={true} />
    }
}

function MenuBar(){
    return(
            <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-xl navbar-light bg-light">
                    <div className="navbar-brand">
                        
                        <img src={logo} alt="Tiger" height="60%" width="20%"/>
                        <h1 className="tm-site-title mb-0">Dashboard</h1>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <Link to="/">Dashboard</Link>
                            </li>
                            <Link to="/products">Products</Link>

                            <li className="nav-item">
                            <Link to="/accounts">Accounts</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Settings
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Idk</a>
                                    <a className="dropdown-item" href="#">Something</a>
                                    <a className="dropdown-item" href="#">Useful</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MenuBar;