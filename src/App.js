import './App.css';
import Player from './components/Player/Player';
import React, { useContext } from 'react';
import { AuthContext } from './auth/AuthProvider';
import { AuthProvider } from './auth/AuthProvider';
import LoginForm from './LoginForm';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthProvider>
      {isAuthenticated ? (
        <>
          <Player />
        </>
      ) : (
        <div>
          <LoginForm />
        </div>
      )}
    </AuthProvider>
  );

}

export default App;
