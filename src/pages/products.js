import React, {Fragment} from 'react';
import MenuBar from "./menuBar";
function Products(){
    return(
        <Fragment>
<body id="reportsPage" className="bg02">
    <div className="" id="home">
        <div className="container">
            <MenuBar/>
            <div className="row tm-content-row tm-mt-big">
                <div className="col-xl-8 col-lg-12 tm-md-12 tm-sm-12 tm-col">
                    <div className="bg-white tm-block h-100">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="tm-block-title d-inline-block">Class Browser</h2>

                            </div>
                            <div className="col-md-4 col-sm-12 text-right">
                                <a href="add-product" className="btn btn-small btn-primary">Create Class/Section</a>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover table-striped tm-table-striped-even mt-3">
                                <thead>
                                    <tr className="tm-bg-gray">
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col" className="text-center">Dept</th>
                                        <th scope="col" className="text-center">Class Code</th>
                                        <th scope="col">Professor</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">High-level Programming</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">1102</td>
                                        <td>Dr. Fogarty</td>
                                        
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Enormous Data</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">4309</td>
                                        <td>Dr. Luis</td>
                                        
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Functional Languages 2</td>
                                        <td className="text-center">PHIL</td>
                                        <td className="text-center">3405</td>
                                        <td>Dr. Massingill</td>
                                        
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">AGILE Soda Drinking</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">2367</td>
                                        <td>Dr. Horn</td>
                                       
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Theoretical Coding</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">3301</td>
                                        <td>Dr. Myers</td>
                                       
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Pre-Algorithms</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">1401</td>
                                        <td>Dr. Zhang</td>
                                        
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Ransomware DIY</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">3396</td>
                                        <td>Dr. Tan</td>
                                        
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input type="checkbox" aria-label="Checkbox"/>
                                        </th>
                                        <td className="tm-product-name">Pointers</td>
                                        <td className="text-center">CSCI</td>
                                        <td className="text-center">1309</td>
                                        <td>To be announced</td>
                                        
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tm-table-mt tm-table-actions-row">
                            <div className="tm-table-actions-col-left">
                                <button className="btn btn-danger">Add Selected to Dashboard</button>
                            </div>
                            <div className="tm-table-actions-col-right">
                                <span className="tm-pagination-label">Page</span>
                                <nav aria-label="Page navigation" className="d-inline-block">
                                    <ul className="pagination tm-pagination">
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <span className="tm-dots d-block">...</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">13</a></li>
                                        <li className="page-item"><a className="page-link" href="#">14</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-12 tm-md-12 tm-sm-12 tm-col">
                    <div className="bg-white tm-block h-100">
                        <h2 className="tm-block-title d-inline-block">Departments</h2>
                        <table className="table table-hover table-striped mt-3">
                            <tbody>
                                <tr>
                                    <td>Biology</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Chemistry</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Communications</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Economics</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Engineering</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>History</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Mathematics</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Physics</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>

                        <a href="#" className="btn btn-primary tm-table-mt">Switch to Pathways</a>
                    </div>
                </div>
            </div>
            <footer className="row tm-mt-small">
                <div className="col-12 font-weight-light">
                    <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                        Copyright &copy; Dr. Myers - He look like Einstein
                        
                    </p>
                </div>
            </footer>
        </div>
    </div>
    <script src="../../public/js/jquery-3.3.1.min.js"></script>
    
    <script src="../../public/js/bootstrap.min.js"></script>
    
    
</body>
        </Fragment>
    )
}

export default Products;

//Shit didn't work so deleted
/*
<script>
        $(function () {
            $('.tm-product-name').on('click', function () {
                window.location.href = "edit-product.html";
            });
        })
    </script>
*/