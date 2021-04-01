import React from 'react';
import './Products.scss';
import ProductItem from '../ProductItem/ProductItem';
import { products } from '../../data.json'

const Products = () => {
  return (
    <div className="products">
      {
        products?.map((item, index) => <ProductItem product={item} key={index} /> )
      }
    </div>
  );
};

export default Products;