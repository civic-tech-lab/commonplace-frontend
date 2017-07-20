import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

class Header extends Component {
  state = {
    searchInput: ''
  };

  constructor() {
    super();

    this._updateSearchInput = this.updateSearchInput.bind(this);
    this._submitSearch = this.submitSearch.bind(this);
  }

  updateSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  submitSearch(e) {
    e.preventDefault();
    console.log('will submit search for', this.state.searchInput);
  }

  render() {
    return (
      <header className="header">
        <section>
          <Link to="/">
            <div>CommonPlace</div>
            <div>++Falls Church++</div>
          </Link>
        </section>
        <section>
          <form onSubmit={this._submitSearch}>
            <input
              type="search"
              value={this.state.searchInput}
              onChange={this._updateSearchInput}
              placeholder="Search ++Falls Church++..."
            />
          </form>
        </section>
        <section>
          <Link to="my-page">My Page</Link>
          <Link to="messages">Messages</Link>
          <Link to="settings">Settings</Link>
        </section>
      </header>
    );
  }
}

export default Header;
