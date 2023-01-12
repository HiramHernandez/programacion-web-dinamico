import React from 'react';
import logo from './logo.svg';
import  ProjectsPage from "./projects/ProjectsPage";
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src='/assets/logo-3.svg' alt='logo' width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className='icon-home'></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          <span className='icon-home'></span>
          Projects
        </NavLink>
        <NavLink to="/cancel" className="button rounded disabled-link">
          <span className="icon-cart"></span>
          Buy Cart
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
