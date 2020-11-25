import React from 'react';

import StyledPageCommands from './PageCommands.styled';
import { 
  FiChevronsLeft, 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronsRight 
} from 'react-icons/fi';

const PageCommands = ({ total, current, handleChangePageClick }) => {

  return (
    <StyledPageCommands>
      <div className='commands'>
        <button 
          onClick={handleChangePageClick}
          data-page={1}
          disabled={current > 1 ? false : true}
        >
          <FiChevronsLeft />
        </button>
        <button
          onClick={handleChangePageClick}
          data-page={current - 1}
          disabled={current > 1 ? false : true}
        >
          <FiChevronLeft />
        </button>
      </div>
      <p>Showing page {current} of {total}</p>
      <div className='commands'>
        <button
          onClick={handleChangePageClick}
          data-page={current + 1}
          disabled={current < total ? false : true}
        >
          <FiChevronRight />
        </button>
        <button
          onClick={handleChangePageClick}
          data-page={total}
          disabled={current < total ? false : true}
        >
          <FiChevronsRight />
        </button>
      </div>
    </StyledPageCommands>
  )
}

export default PageCommands;