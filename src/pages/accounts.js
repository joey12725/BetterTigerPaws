import React, {Fragment} from 'react';
import MenuBar from "./menuBar";
function Accounts(){
    return(
        <Fragment>
            
<body className="bg03">
    <div className="container">
        <MenuBar/>
        <div className="row tm-content-row tm-mt-big">
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tm-block-title d-inline-block">Audit Status</h2>
                        </div>
                    </div>
                    <table className="table table-hover table-striped mt-3">
                        <tbody>
                            <tr>
                                <td>Major: Chilling</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Minor: Vibing</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Credits: 14/120</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Pathways Pending: Many</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Outstanding Balance: $78,289.23</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Discipline Breadth Req: Sorted</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Residency Requirement: Achieved</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Felonies: 2 to 3 (suspected)</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Conclusion: Valedictorian</td>
                                <td> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tm-block-title">Edit Account</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form action="" className="tm-signup-form">
                                <div className="form-group">
                                    <label for="name">Account Name</label>
                                    <input placeholder="Julius Coleslaw" id="name" name="name" type="text" className="form-control validate"/>
                                </div>
                               
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input placeholder="******" id="password" name="password" type="password" className="form-control validate"/>
                                </div>
                                <div className="form-group">
                                    <label for="password2">Re-enter Password</label>
                                    <input placeholder="******" id="password2" name="password2" type="password" className="form-control validate"/>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input placeholder="1-800-COLLECT" id="phone" name="phone" type="tel" className="form-control validate"/>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-4">
                                        <button type="submit" className="btn btn-primary">Update
                                        </button>
                                    </div>
                                    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-col tm-col-small">
                <div className="bg-white tm-block">
                    <h2 className="tm-block-title">Profile Image</h2>
                    <img src="../../public/img/guy.jpg" alt="Profile Image" className="img-fluid"/>
                    <div className="custom-file mt-3 mb-3">
                        <input id="fileInput" type="file"/>
                        <input type="button" className="btn btn-primary d-block mx-xl-auto" value="Upload New..." onclick="document.getElementById('fileInput').click();"
                        />
                    </div>
                </div>
            </div>
        </div>
        <footer className="row tm-mt-small">
            <div className="col-12 font-weight-light">
                <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                    Copyright &copy; Dr. Fogarty - Functions Functions Functions...
                    
                </p>
            </div>
        </footer>
    </div>

    <script src="../../public/js/jquery-3.3.1.min.js"></script>
    
    <script src="../../public/js/bootstrap.min.js"></script>
    
</body>
        </Fragment>
    )
}

export default Accounts;
