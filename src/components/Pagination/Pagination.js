import React from 'react';
import './Pagination.scss';
import { Pagination } from 'react-bootstrap';

const PaginationBar = () => {
  return (
    <div className="pagination_bar mt-5">
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item>{7}</Pagination.Item>
        <Pagination.Item>{8}</Pagination.Item>
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>
        <span style={{color:"#27ae60"}}>next</span>
        </Pagination.Item>   
      </Pagination>
    </div>
  );
};

export default PaginationBar;