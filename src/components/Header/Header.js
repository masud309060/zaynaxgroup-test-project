import React from 'react';
import HorizontalFilter from '../HorizontalFilter/HorizontalFilter';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <div className="header container-fluid">
      <NavBar /> 
      <HorizontalFilter /> 
    </div>
  );
};

export default Header;