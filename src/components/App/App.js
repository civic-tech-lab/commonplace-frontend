// @flow
import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import './App.css';

type Props = {|
  children?: Node,
|};

const App = ({ children }: Props) => <div className="App">{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
