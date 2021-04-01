import React from 'react';
import PaginationBar from '../Pagination/Pagination';
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
        <PaginationBar /> 
      </div>
    </div>
  );
};

export default Main;