import {useState, useEffect} from "react";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth, Hub} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import Products from './pages/products';
import Accounts from './pages/accounts';
import AddProduct from './pages/addProducts';
import Login from './pages/Login';
import {Footer} from './pages/footer';
import { SignInFooter } from './pages/signInFooter';
import { Header } from './pages/header';
import { SignInHeader } from './pages/signInHeader';
import {  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,} from 'react-router-dom';
import { createRoot } from "react-dom/client";
import MenuBar from './pages/menuBar';
import Dashboard from './pages/dashboard';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,


  },
  // {
  //   path: "accounts",
  //   element: <div><Accounts/></div>,
  // },
  {
    path: "products",
    element: <div><Products/></div>,
  },
  {
    path: "login",
    element: <div><Login/></div>,
  },
  {
    path: "addProduct",
    element: <div><AddProduct/></div>,
  }
]);



function App() {
  const [currentUser, setCurrentUser] = useState();

useEffect(() => {
  Hub.listen('auth', ({ payload }) => {

    const { event } = payload;
    if (event === 'signIn') {
        setCurrentUser(true)
    }
    if (event === 'signOut' || event === 'autoSignIn') {

        setCurrentUser(false)
    }
})



}, [])
  
  return (

        


        <div>
        
        {currentUser ? <RouterProvider router={router} /> : <Login/>}

          
        </div>



  );
}

export default App;
