import React, {Fragment} from 'react';
import MenuBar from "./menuBar";
function EditProduct(){
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
                            <h2 className="tm-block-title d-inline-block">Edit Product</h2>
                        </div>
                    </div>
                    <div className="row mt-4 tm-edit-product-row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <form action="" className="tm-edit-product-form">
                                <div className="input-group mb-3">
                                    <label for="name" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Name
                                    </label>
                                    <input id="name" name="name" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="description" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 mb-2">Description</label>
                                    <textarea className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" rows="3" required></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="category" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Department</label>
                                    <select className="custom-select col-xl-9 col-lg-8 col-md-8 col-sm-7" id="category">
                                        <option selected>Select one</option>
                                        <option value="1">CSCI</option>
                                        <option value="2">PHYS</option>
                                        <option value="3">FILM</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="expire_date" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Start Date
                                    </label>
                                    <input id="expire_date" name="expire_date" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                                        data-large-mode="true"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="expire_date" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">End Date
                                    </label>
                                    <input id="expire_date" name="expire_date" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7"
                                        data-large-mode="true"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label for="stock" className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Section
                                    </label>
                                    <input id="stock" name="stock" type="text" className="form-control validate col-xl-9 col-lg-8 col-md-7 col-sm-7"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="ml-auto col-xl-8 col-lg-8 col-md-8 col-sm-7 pl-0">
                                        <button type="submit" className="btn btn-primary">Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 mx-auto mb-4">
                            <img src="../../public/img/product-image.jpg" alt="Syllabus" className="img-fluid mx-auto d-block"/>
                            <div className="custom-file mt-3 mb-3">
                                <input id="fileInput" type="file" style="display:none;" />
                                <input type="button" className="btn btn-primary d-block mx-auto" value="Upload Syllabus" onclick="document.getElementById('fileInput').click();"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="row tm-mt-big">
            <div className="col-12 font-weight-light">
                <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                    Copyright &copy; 2018 Admin Dashboard . Created by
                    <a rel="nofollow" href="https://www.tooplate.com" className="text-white tm-footer-link">Tooplate</a>
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

export default EditProduct;

//Shit borked need it it's here
/*
<script>
        $(function () {
            $('#expire_date').datepicker();
        });
    </script>
*/