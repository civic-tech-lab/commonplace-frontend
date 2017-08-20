import React, { Component } from 'react';

import { Header, Footer, SidebarNav } from '../';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <aside>
          <SidebarNav />
        </aside>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
