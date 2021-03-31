import React from 'react';
import './ProductItem.scss';

const ProductItem = ({product}) => {
  
  return (
    <div className="product_item">
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <strong>BDT. {product.price}</strong>
      <div>
        <del>BDT. {product.previousPrice}</del>
        <span>{product.discount}off</span>
      </div>
    </div>
  );
};

export default ProductItem;