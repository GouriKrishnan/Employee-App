// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employee-form">Employee Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
