import React, {Fragment} from 'react';


function Login(){
    return(
        <Fragment>
            
<body class="bg03">
    <div class="container">
        <div class="row tm-mt-big">
            <div class="col-12 mx-auto tm-login-col">
                <div class="bg-white tm-block">
                    <div class="row">
                        <div class="col-12 text-center">
                            
                            <img src="../../public/img/Trin-icon.png" alt="Tiger" height="60%" width="20%"/>
                            <h2 class="tm-block-title mt-3">BetterER Tigerpaws</h2>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <form action="index" method="post" class="tm-login-form">
                                <div class="input-group">
                                    <label for="username" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Username</label>
                                    <input name="username" type="text" class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" id="username" value="admin" required/>
                                </div>
                                <div class="input-group mt-3">
                                    <label for="password" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Password</label>
                                    <input name="password" type="password" class="form-control validate" id="password" value="1234" required/>
                                </div>
                                <div class="input-group mt-3">

                                </div>
                                <div class="input-group mt-3">
                                    <p><em>Placeholder Login.</em></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="row tm-mt-big">
            <div class="col-12 font-weight-light text-center">
                <p class="d-inline-block tm-bg-black text-white py-2 px-4">
                    Copyright &copy; 2023 Dr. Horn - Cracking open cold ones (soda) since 1987
                </p>
            </div>
        </footer>
    </div>
</body>
        </Fragment>
    )
}

export default Login;
