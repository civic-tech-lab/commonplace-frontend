import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ children }) => <div className="App">{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
