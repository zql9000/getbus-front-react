import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Ventas</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/viajes"
            >
              <i class="fas fa-globe-americas"></i> Viajes
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/pasajeros"
            >
              <i class="fas fa-walking"></i> Pasajeros
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/boletos"
            >
              <i class="fas fa-ticket-alt"></i> Boletos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/facturas"
            >
              <i class="fas fa-file-invoice-dollar"></i> Facturas
            </NavLink>
          </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Tablas maestras</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/empresas"
            >
              <i class="fas fa-building"></i> Empresas de bus
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-vehiculo"
            >
              <i class="fas fa-bus-alt"></i> Tipos de vehículo
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/vehiculos"
            >
              <i class="fas fa-bus"></i> Vehículos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-asiento"
            >
              <i class="fas fa-swatchbook"></i> Tipos de asiento
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/asientos"
            >
              <i class="fas fa-chair"></i> Asientos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tramos"
            >
              <i class="fas fa-route"></i> Tramos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/terminales"
            >
              <i class="fas fa-map-pin"></i> Terminales de bus
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/ciudades"
            >
              <i class="fas fa-city"></i> Ciudades
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/provincias"
            >
              <i class="fas fa-map-marker-alt"></i> Provincias
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/tipos-documento"
            >
              <i class="fas fa-passport"></i> Tipos de documento
            </NavLink>
          </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Administración</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/roles"
            >
              <i class="fas fa-user-cog"></i> Roles de usuario
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/usuarios"
            >
              <i class="fas fa-user"></i> Usuarios
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/permisos"
            >
              <i class="fas fa-user-lock"></i> Permisos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
