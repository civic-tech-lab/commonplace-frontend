import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { routeStrings } from '../../routes'
import './SidebarNav.css';

class SidebarNav extends Component {
  // NOTE: URLs here are just placeholders
  render() {
    return (
      <ul className="sidebar-nav">
        <li>
          <Link to={`/${routeStrings.create}`}>Create New Post</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.questions}`}>Questions</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.yardSale}`}>Yard Sale</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.events}`}>Events</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.discussions}`}>Discussions</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.announcments}`}>Announcments</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.proposals}`}>Proposals</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.promotions}`}>Promotions</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.neighbors}`}>Neighbors</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.pages}`}>Pages</Link>
        </li>
        <li>
          <Link to={`/${routeStrings.topics}`}>Topics</Link>
        </li>
      </ul>
    );
  }
}

export default SidebarNav;
