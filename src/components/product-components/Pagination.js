import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setActivePage } from '../../store/elementVisibilitySlice';

function Pagination({ itemsPerPage, totalItems, paginate }) {
      const {numActivePage} = useSelector(state => state.visibility);
      const dispatch = useDispatch();
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
    }
function linkActive(index, number){
        paginate(number)
        dispatch(setActivePage(index))
    }
  return (
    <div className ="pagination">
      {pageNumbers.map((number, index) => (
            <a onClick={() => linkActive(index, number)}
               href='!#' key={number}
               className={(index == numActivePage) ? 'active': ''}>
              {number}
            </a>
        ))}
</div>
  );
};

export default Pagination;
