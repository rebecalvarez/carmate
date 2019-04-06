import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Landing from './views/pages/Landing.js';
import Dashboard from './views/pages/Dashboard.js';
import Repair from './views/pages/Repair.js';
// import Team from './views/pages/Team.js';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/dashboard" component={DashboardLayout} /> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/repair" component={Repair} />
        {/* <Route exact path="/team" component={Team} /> */}
      </Switch>
    </BrowserRouter>
  );
}
