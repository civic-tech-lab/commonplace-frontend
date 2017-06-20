import React, { Component } from 'react';

import { Header, Footer, Sidebar } from '../';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
          Main goes here
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default Main;
