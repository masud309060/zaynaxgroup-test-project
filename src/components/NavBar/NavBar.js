import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li><a href="#homepage">Homepage</a></li>
        <li><a className="active" href="#all_products">All products</a></li>
      </ul>
    </div>
  );
};

export default NavBar;