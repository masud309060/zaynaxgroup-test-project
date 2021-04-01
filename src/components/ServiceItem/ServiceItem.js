import React from 'react';
import './ServiceItem.scss';

const ServiceItem = ({service}) => {
  const { title, image, description} = service;
  return (
    <div className="service_item">
      <img src={image} alt={title}/>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;