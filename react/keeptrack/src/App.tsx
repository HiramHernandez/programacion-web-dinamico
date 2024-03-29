import React from 'react';
import logo from './logo.svg';
import  ProjectsPage from "./projects/ProjectsPage";
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import LoginComponent from './components/login.component';
import { User } from './models/user.model';
import './App.css';

function App() {
  let user: User = {
    id:1,
    username:"admin",
    password:"123",
    menu: [1, 2]
  }
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src='/assets/logo-3.svg' alt='logo' width="49" height="99" />
        </span>
        <NavLink to="/login" className="button rounded">
          <span className='icon-user'></span>
          Login
        </NavLink>
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
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
