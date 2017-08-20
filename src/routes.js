import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App, Main } from './components';


// To avoid hardcoding route strings everywhere
export const routeStrings = {
  myPage: 'my-page',
  messages: 'messages',
  settings: 'settings',
  create: 'create',
  questions: 'questions',
  yardSale: 'yard-sale',
  events: 'events',
  discussions: 'discussions',
  announcements: 'announcements',
  proposals: 'proposals',
  promotions: 'promotions',
  neighbors: 'neighbors',
  pages: 'pages',
  topics: 'topics'
};


// React router v4 - https://reacttraining.com/react-router/
const appRoutes = (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path={`/${routeStrings.myPage}`} exact component={() => <div>Placeholder My Page route</div>} />
    <Route path={`/${routeStrings.messages}`} exact component={() => <div>Placeholder Messages route</div>} />
    <Route path={`/${routeStrings.settings}`} exact component={() => <div>Placeholder Settings route</div>} />
    <Route component={() => <div>Placeholder 404 page</div>} />
  </Switch>
);

const baseRoute = <Route path="/" render={(props) => <App {...props}>{appRoutes}</App>} />;

export default baseRoute;
