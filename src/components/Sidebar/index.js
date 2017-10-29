// @flow
import FaBullhorn from 'react-icons/lib/fa/bullhorn';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaCertificate from 'react-icons/lib/fa/certificate';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaEdit from 'react-icons/lib/fa/edit';
import FaFileO from 'react-icons/lib/fa/file-o';
import FaGroup from 'react-icons/lib/fa/group';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import FaTag from 'react-icons/lib/fa/tag';
import React from 'react';

import Root from './Root';
import NavItem from './NavItem';

const filters = [
  { icon: <FaCommentO />, label: 'Questions' },
  { icon: <FaMapSigns />, label: 'Yard Sale' },
  { icon: <FaCalendar />, label: 'Events' },
  { icon: <FaCommentO />, label: 'Discussions' },
  { icon: <FaBullhorn />, label: 'Announcements' },
  { icon: <FaCommentO />, label: 'Proposals' },
  { icon: <FaCertificate />, label: 'Promotions' },
];

const groups = [
  { icon: <FaGroup />, label: 'Neighbours' },
  { icon: <FaFileO />, label: 'Pages' },
  { icon: <FaTag />, label: 'Topics' },
];

const Sidebar = () => (
  <Root>
    <NavItem icon={<FaEdit />} primary>
      Create new post
    </NavItem>
    {filters.map(({ icon, label }) => (
      <NavItem key={label} icon={icon} type="filter">
        {label}
      </NavItem>
    ))}
    {groups.map(({ icon, label }) => (
      <NavItem key={label} icon={icon} type="group">
        {label}
      </NavItem>
    ))}
  </Root>
);

export default Sidebar;
