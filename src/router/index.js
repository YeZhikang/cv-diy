import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../config/router';

export const MainPages = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.name} exact path={route.path} name={route.name}>
            {route.component()}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};
