import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
