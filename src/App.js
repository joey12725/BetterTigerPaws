import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import Index from './pages';
import Products from './pages/products';
import Accounts from './pages/accounts';
import AddProduct from './pages/addProducts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


Amplify.configure(awsconfig);
Auth.configure(awsconfig);

//var perf = require('./products.html');
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Router>
            <Routes>
              <Route path = '/index' element = {<Index/>}/>
              <Route path = '/products' element = {<Products/>}/>
              <Route path = '/accounts' element = {<Accounts/>}/>
              <Route path = '/add-product' element = {<AddProduct/>}/>
            </Routes>
          </Router>
          <Index/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
