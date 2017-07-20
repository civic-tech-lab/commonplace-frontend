import React, { Component } from 'react';

import { Header, Footer, Sidebar } from '../';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <aside>
          <Sidebar />
        </aside>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
