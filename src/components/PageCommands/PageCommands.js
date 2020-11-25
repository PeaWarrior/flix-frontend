import React from 'react';

import { StyledPageCommands, StyledPageButton } from './PageCommands.styled';
import { 
  FiChevronsLeft, 
  FiChevronLeft, 
  FiChevronRight, 
  FiChevronsRight 
} from 'react-icons/fi';

const PageCommands = ({ total, current, handleChangePageClick }) => {

  return (
    <StyledPageCommands>
      <div>
        <StyledPageButton 
          onClick={handleChangePageClick}
          data-page={1}
          disabled={current > 1 ? false : true}
        >
          <FiChevronsLeft />
        </StyledPageButton>
        <StyledPageButton
          onClick={handleChangePageClick}
          data-page={current - 1}
          disabled={current > 1 ? false : true}
        >
          <FiChevronLeft />
        </StyledPageButton>
      </div>
      <p>Page {current} of {total}</p>
      <div>
        <StyledPageButton
          onClick={handleChangePageClick}
          data-page={current + 1}
          disabled={current < total ? false : true}
        >
          <FiChevronRight />
        </StyledPageButton>
        <StyledPageButton
          onClick={handleChangePageClick}
          data-page={total}
          disabled={current < total ? false : true}
        >
          <FiChevronsRight />
        </StyledPageButton>
      </div>
    </StyledPageCommands>
  )
}

export default PageCommands;