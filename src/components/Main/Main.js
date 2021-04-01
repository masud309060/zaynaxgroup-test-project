import React from 'react';
import Products from '../Products/Products';
import VerticalFilter from '../VerticalFilter/VerticalFilter';
import './Main.scss'

const Main = () => {
  return (
    <div className="main container-fluid">
      <div className="main_sidebar">
        <VerticalFilter /> 
      </div>
      <div className="main_products">
        <Products /> 
      </div>
    </div>
  );
};

export default Main;