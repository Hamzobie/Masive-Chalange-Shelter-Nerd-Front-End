import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilet from "../assets/img/profilet.jpg";
import logo from "../assets/img/update logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{paddingLeft:64,paddingRight:64, background: '#FCF5ED', boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.25)'}}>
      {/* Left side: Logo */}
      <a className="navbar-brand" href="#">
        <img src={logo} width="50" height="50" alt="Logo"  className="rounded-circle"/>
        <a style={{paddingLeft:10, color: 'black', fontSize: 20,  fontWeight: 'bold', wordWrap: 'break-word'}}>X E T</a>
      </a>

      {/* Middle: Dashboard Link */}
      <div className="navbar-nav mx-auto">
        <Link to='/Dashboard'>
        <a className="nav-link" style={{color: '#404040', fontSize: 16, fontWeight: 'bold', wordWrap: 'break-word'}}>
          Dashboard
        </a>
        </Link>
        <Link to='/Event'>
        <a className="nav-link" style={{color: '#CE5A67', fontSize: 16, fontWeight: 'bold', wordWrap: 'break-word'}}>
          Events
        </a>
        </Link>
        
        
      </div>

      {/* Right side: Profile Image */}
      <div className="navbar-nav ml-auto">
        <Link to='/Profile'>
        <a className="nav-link">
          <img
            src={profilet}
            width="50"
            height="50"
            alt="Profile"
            className="rounded-circle"
          />
        </a>
        </Link>
      </div>
    </nav> 
  );
};
export default Navbar;