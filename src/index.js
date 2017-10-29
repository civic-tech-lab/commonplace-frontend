// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const rootNode = document.getElementById('root');

if (rootNode != null) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>,
    rootNode,
  );
} else {
  // TODO: Abstract console calls with logging wrapper.
  // eslint-disable-next-line no-console
  console.error(
    'No element with id "root" found.  React app could not be mounted!',
  );
}

registerServiceWorker();
