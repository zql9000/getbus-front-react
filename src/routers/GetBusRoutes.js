import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';

export const GetBusRoutes = () => {
  return (
    <>
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};
