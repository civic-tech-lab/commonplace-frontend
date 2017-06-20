import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App, Main } from './components';

// React router v4 - https://reacttraining.com/react-router/
const appRoutes = (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/about" exact component={() => <div>Example About Page route</div>} />
    <Route component={() => <div>Placeholder 404 page</div>} />
  </Switch>
);

const baseRoute = <Route path="/" render={(props) => <App {...props}>{appRoutes}</App>} />;

export default baseRoute;
