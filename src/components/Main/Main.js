import React, { Component } from 'react';

import { Header, Footer, Sidebar } from '../';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
          <h1>Hello, world!</h1>
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default Main;
