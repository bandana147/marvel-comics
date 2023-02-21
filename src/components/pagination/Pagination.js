import React from 'react';
import { usePagination, DOTS } from '../../utils/usePagination';
import * as S from './styles';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <S.PaginationContainer>
      <S.PaginationItem
        onClick={onPrevious}
        className={currentPage === 1? 'disabled': ''}
      >
        <div className="arrow left" />
      </S.PaginationItem>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <S.PaginationItem className="pagination-item dots">&#8230;</S.PaginationItem>;
        }
        return (
          <S.PaginationItem
            className={pageNumber === currentPage ? 'selected': ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </S.PaginationItem>
        );
      })}
      <S.PaginationItem
        className={currentPage === lastPage? 'disabled': ''}
        onClick={onNext}
      >
        <div className="arrow right" />
        </S.PaginationItem>
    </S.PaginationContainer>
  );
};

export default Pagination;