import React from 'react';
import { Route, Switch } from 'react-router';
import { BusStationsScreen } from '../components/busStations/BusStationsScreen';
import { CitiesScreen } from '../components/cities/CitiesScreen';
import { DocumentTypesScreen } from '../components/documentTypes/DocumentTypesScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ProvincesScreen } from '../components/provinces/ProvincesScreen';
import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';

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
              <Route path="/" component={HomeScreen} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};
