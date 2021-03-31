import React from 'react';
import Products from '../Products/Products';
import './Main.scss'

const Main = () => {
  return (
    <div className="main container-fluid">
      <div className="main_sidebar">
      sidebar
      </div>
      <div className="main_products">
        <Products /> 
      </div>
    </div>
  );
};

export default Main;