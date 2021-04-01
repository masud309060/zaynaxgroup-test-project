import React from 'react';
import './HorizontalFilter.scss';

const HorizontalFilter = () => {
  return (
    <div className="horizontal_filter">
      <p>Showing 1 - 40 of 80,068 products </p>
      <div className="filter_refine">
        <strong>Refine by</strong>
        <select name="price" id="price">
          <option value="price">Price</option>     
          <option value="199">$199</option>   
        </select>
      </div>
      <div className="filter_sort">
        <strong>Sort by</strong>
        <select name="sort" id="sort">
          <option value="">Best sellers</option>      
          <option value="size">size</option>   
        </select>
      </div>
      <div className="search_bar">
        <form action="">
          <div className="search_bar_controller">
            <input type="text" placeholder="Search"/>
            <img src="/assets/loupe.png" alt=""/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HorizontalFilter;