import React, {Fragment} from 'react';
import MenuBar from "./menuBar";
function AddProduct(){
    return(
        <Fragment>
            
<body className="bg02">
    <div className="container">
        <MenuBar/>
        <div className="row tm-mt-big">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <div className="bg-white tm-block">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tm-block-title d-inline-block">Create Section</h2>
                        </div>
                    </div>
                    <div className="row mt-4 tm-edit-product-row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <form action="" className="tm-edit-product-form">
                                <div className="input-group mb-3">
                                    <label for="name" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Course ID
                                    </label>
                                    <input id="name" name="name" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Course Name</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Course Subject</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Semester </label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Section Code</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Meeting Time</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Taught By</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Meeting Days</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">User ID</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                                        <button type="submit" className="btn btn-primary">Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <footer className="row tm-mt-big">
            <div className="col-12 font-weight-light">
                <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                    Copyright &copy; Leeroy's Buttcheeks
                </p>
            </div>
        </footer>
    </div>

    <script src="../../public/js/jquery-3.3.1.min.js"></script>
    
    <script src="../../public/jquery-ui-datepicker/jquery-ui.min.js"></script>
    
    <script src="../../public/js/bootstrap.min.js"></script>
    
    
</body>
        </Fragment>
    )
}

export default AddProduct;

//shit Brok 

/*
<script>
        $(function () {
            $('#expire_date').datepicker();
        });
    </script>
*/
