"use client";
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

<a className="navbar-brand d-flex align-items-center" href="#">
        {/* TS Icon */}
        <img src="/TS_Icon.svg" alt="TS Icon" width="40" height="40" className="d-inline-block align-top me-2" />
        {/* TS Name */}
        <img src="/TS_Name.svg" alt="Transtar Name" width="170" height="40" className="d-inline-block align-top" />
      </a>
      
      <form className="d-flex ms-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fas fa-search text-dark fa-lg"></i>
          </span>
          <input type="text" className="form-control border-start-0 fs-6" placeholder="Search..." />
          <button className="btn btn-primary text-white fs-6" type="button">Search</button> {/* Note the change to `btn-primary` */}
        </div>
      </form>
      
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-light fs-6" href="#">
              <i className="fas fa-book me-1 fa-lg"></i> Wiki
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-6" href="#">
              <i className="fas fa-address-book me-1 fa-lg"></i> Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fs-6" href="#">
              <i className="fas fa-bell me-1 fa-lg"></i> What&rsquo;s New
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center text-light fs-6"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle me-1 fa-lg"></i> TS Operator 1
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">My Account</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Favorites</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
