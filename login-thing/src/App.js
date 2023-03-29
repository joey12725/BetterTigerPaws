import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import Index from './pages';

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
