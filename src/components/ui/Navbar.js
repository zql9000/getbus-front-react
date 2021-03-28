import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/authActions';

export const Navbar = () => {
  const { name, lastName, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img alt="Get Bus" src="GetBus.png" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav me-auto"></div>
          <div className="navbar-text pe-2 small">
            <span>
              {name} {lastName}
            </span>
            <br />
            <span>{role}</span>
          </div>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span> Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
