import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import Index from './pages';
import Products from './pages/products';
import Accounts from './pages/accounts';
import AddProduct from './pages/addProducts';
import Login from './pages/Login';
import {Footer} from './pages/footer';
import { SignInFooter } from './pages/signInFooter';
import { Header } from './pages/header';
import { SignInHeader } from './pages/signInHeader';
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import MenuBar from './pages/menuBar';
import Dashboard from './pages/dashboard';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const test = () => {
  console.log("test");
}
//var perf = require('./products.html');
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Authenticator>
      
      {({ signOut, user }) => (
        <main>
          test(),
          <MenuBar/>
          <Dashboard/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {components: {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  Footer
}});
