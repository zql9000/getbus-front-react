import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/authActions';
import './navbar.css';

export const Navbar = () => {
  const { name, lastName, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
        <img alt="Get Bus" src="GetBus.png" height="30" />
      </Link>
      <div className="navbar-end">
        <div className="small user-detail">
          <span>
            {name} {lastName}
          </span>
          <p className="m-0">{role}</p>
        </div>
        <ul className="navbar-nav px-3 navbar-center">
          <li className="nav-item text-nowrap">
            <span className="nav-link pointer" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </li>
        </ul>
        <button
          className="navbar-toggler text-end d-md-none collapsed me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </header>
  );
};
