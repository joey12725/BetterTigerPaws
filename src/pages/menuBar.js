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
    console.log("Signing Out")
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
                            <li className="nav-link">
                                
                                <Link to="/">Dashboard</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/products">Products</Link>
                            </li>
                             
                            {/* <li className="nav-link">
                                <Link to="/accounts">Accounts</Link>
                            </li> */}

                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button onClick={signOut}>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MenuBar;