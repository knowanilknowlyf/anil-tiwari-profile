import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'Home', path: '.', icon: <FaWpforms /> },
  { text: 'Educational Details', path: 'educational-details', icon: <MdQueryStats /> },
  { text: 'Tech Stack', path: 'tech-stack', icon: <ImProfile /> },
  { text: 'Project Details', path: 'project-details', icon: <IoBarChartSharp /> },
//   { text: 'Admin', path: 'admin', icon: <MdAdminPanelSettings /> },
  { text: 'Contact Me', path: 'contact-me', icon: <MdAdminPanelSettings /> },
];

export default links;