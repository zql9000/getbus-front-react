import React from 'react';
import { Route, Switch } from 'react-router';
import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';
import { BusStationsScreen } from '../components/busStations/BusStationsScreen';
import { CitiesScreen } from '../components/cities/CitiesScreen';
import { DocumentTypesScreen } from '../components/documentTypes/DocumentTypesScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ProvincesScreen } from '../components/provinces/ProvincesScreen';
import { TransportCompaniesScreen } from '../components/transportCompanies/TransportCompaniesScreen';
import { VehicleTypesScreen } from '../components/vehicleTypes/VehicleTypesScreen';
import { SeatTypesScreen } from '../components/seatTypes/SeatTypesScreen';
import { PermissionsScreen } from '../components/permissions/PermissionScreen';
import { RolesScreen } from '../components/roles/RolesScreen';
import { UsersScreen } from '../components/users/UsersScreen';

export const GetBusRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path="/provincias" component={ProvincesScreen} />
              <Route
                exact
                path="/tipos-documento"
                component={DocumentTypesScreen}
              />
              <Route exact path="/ciudades" component={CitiesScreen} />
              <Route exact path="/terminales" component={BusStationsScreen} />
              <Route
                exact
                path="/empresas"
                component={TransportCompaniesScreen}
              />
              <Route
                exact
                path="/tipos-vehiculo"
                component={VehicleTypesScreen}
              />
              <Route exact path="/tipos-asiento" component={SeatTypesScreen} />
              <Route exact path="/permisos" component={PermissionsScreen} />
              <Route exact path="/roles" component={RolesScreen} />
              <Route exact path="/usuarios" component={UsersScreen} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};
