import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { routeStrings } from '../../routes'
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
        <div>
          <Link to="/">
            <div>CommonPlace</div>
            <div>++Falls Church++</div>
          </Link>
        </div>
        <div>
          <form onSubmit={this._submitSearch}>
            <input
              type="search"
              value={this.state.searchInput}
              onChange={this._updateSearchInput}
              placeholder="Search ++Falls Church++..."
            />
          </form>
        </div>
        <div>
          <Link to={`/${routeStrings.myPage}`}>My Page</Link>
          <Link to={`/${routeStrings.messages}`}>Messages</Link>
          <Link to={`/${routeStrings.settings}`}>Settings</Link>
        </div>
      </header>
    );
  }
}

export default Header;
