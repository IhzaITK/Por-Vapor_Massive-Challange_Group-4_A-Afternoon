import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/manage-products">Manage Products</Link></li>
        <li><Link to="/manage-orders">Manage Orders</Link></li>
        <li><Link to="/manage-account">Manage Account</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
