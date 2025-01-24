import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ShoppingList from './ShoppingList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in (replace with real authentication check)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <h1>Shopping App</h1>

        {/* Show the Login/Register buttons if the user is not logged in */}
        {!isLoggedIn ? (
          <div>
            <h2>You need to login first!</h2>
            <Routes>
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
          </div>
        ) : (
          // Once logged in, show the shopping list page
          <Routes>
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        )}

      </div>
    </Router>
  );
}

export default App;
