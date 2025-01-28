import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showRegister, setShowRegister] = useState(false); // Toggle between login and register

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          {showRegister ? (
            <div>
              <Register />
              <p>
                Already have an account?{' '}
                <button onClick={() => setShowRegister(false)}>Login here</button>
              </p>
            </div>
          ) : (
            <div>
              <Login setIsLoggedIn={setIsLoggedIn} />
              <p>
                Don't have an account?{' '}
                <button onClick={() => setShowRegister(true)}>Register here</button>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>Welcome to the app!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
