// Sidebar.jsx
import React from 'react';
import '../src/App.css';

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="sidebar">
      <h2>TechHub</h2>
      <ul>
        <li onClick={() => setActivePage('dashboard')}>Dashboard Overview</li>
        <li onClick={() => setActivePage('floorlist')}>Floor List</li>
        <li onClick={() => setActivePage('bayview')}>Bay/Room View</li>
        <li onClick={() => setActivePage('reports')}>Reports</li>
        <li onClick={() => setActivePage('settings')}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;