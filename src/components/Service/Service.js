import React from 'react';
import './Service.scss';
import { service } from '../../data.json';
import ServiceItem from '../ServiceItem/ServiceItem';

const Service = () => {
  return (
    <div className="service">
      {
        service.map((item, i) => <ServiceItem service={item} key={i} /> )
      }
    </div>
  );
};

export default Service;