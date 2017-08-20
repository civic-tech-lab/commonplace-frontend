import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';

import SidebarNav from './SidebarNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><SidebarNav /></Router>, div);
});
