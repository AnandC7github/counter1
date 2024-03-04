// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CountPage from './CountPage.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="counter-container">
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={count} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className='button'>
            {/* Use Link to navigate to the CountPage */}
            <Link to="/count-page">Submit</Link>
          </div>
        </header>
        <Switch>
          {/* Add a route for the CountPage component */}
          <Route path="/count-page">
            <CountPage count={count} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

