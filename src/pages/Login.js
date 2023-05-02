import React, {Fragment, useState} from 'react';
import {Auth} from 'aws-amplify';
import Logo from '../img/Trin-icon.png';
function Login(){
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        try{
        let response = await Auth.signIn(email,password)
        console.log(response)
        }
        catch(error){
            window.alert("Email or password is incorrect!");
        }
      };
    
    
    return(
        <body class="bg03">
    <div class="container">
        <div class="row tm-mt-big">
            <div class="col-12 mx-auto tm-login-col">
                <div class="bg-white tm-block">
                    <div class="row">
                        <div class="col-12 text-center">
                            
                            <img src={Logo}/>
                            <h2 class="tm-block-title mt-3">Better Tigerpaws</h2>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <form action="index" method="post" class="tm-login-form">
                                <div class="input-group">
                                    <label for="username" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Username</label>
                                    <input name="username" type="text" class="form-control validate col-xl-9 col-lg-8 col-md-8 col-sm-7" id="username" placeholder="username" value={email} onChange={e => setEmail(e.target.value)} required/>
                                </div>
                                <div class="input-group mt-3">
                                    <label for="password" class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-form-label">Password</label>
                                    <input name="password" type="password" class="form-control validate" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                                </div>
                                <div class="input-group mt-3">

                                </div>
                                <div class="input-group mt-3">
                                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
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
                    
                </p>
            </div>
        </footer>
    </div>
</body>
  
    );
}

export default Login;