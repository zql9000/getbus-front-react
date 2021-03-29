import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Ventas</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/viajes"
            >
              <i className="fas fa-globe-americas"></i> Viajes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/pasajeros"
            >
              <i className="fas fa-walking"></i> Pasajeros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/boletos"
            >
              <i className="fas fa-ticket-alt"></i> Boletos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/facturas"
            >
              <i className="fas fa-file-invoice-dollar"></i> Facturas
            </NavLink>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Tablas maestras</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/empresas"
            >
              <i className="fas fa-building"></i> Empresas de bus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-vehiculo"
            >
              <i className="fas fa-bus-alt"></i> Tipos de vehículo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/vehiculos"
            >
              <i className="fas fa-bus"></i> Vehículos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-asiento"
            >
              <i className="fas fa-swatchbook"></i> Tipos de asiento
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/asientos"
            >
              <i className="fas fa-chair"></i> Asientos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tramos"
            >
              <i className="fas fa-route"></i> Tramos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/terminales"
            >
              <i className="fas fa-map-pin"></i> Terminales de bus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/ciudades"
            >
              <i className="fas fa-city"></i> Ciudades
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/provincias"
            >
              <i className="fas fa-map-marker-alt"></i> Provincias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-documento"
            >
              <i className="fas fa-passport"></i> Tipos de documento
            </NavLink>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Administración</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/roles"
            >
              <i className="fas fa-user-cog"></i> Roles de usuario
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/usuarios"
            >
              <i className="fas fa-user"></i> Usuarios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/permisos"
            >
              <i className="fas fa-user-lock"></i> Permisos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
