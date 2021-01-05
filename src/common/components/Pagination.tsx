import React, { Dispatch, SetStateAction } from 'react';
import { usePagination } from '@material-ui/lab/Pagination';

import { capitalize } from 'common/helpers/captialize';
import { StyledNav, StyledUl, StyledButton } from '../styles/Pagination';

interface PaginationProps {
  amountOfPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  amountOfPages,
  currentPage,
  setPage,
}) => {
  const { items } = usePagination({
    count: amountOfPages,
    hidePrevButton: true,
    hideNextButton: true,
    showFirstButton: true,
    showLastButton: true,
    boundaryCount: 1,
    siblingCount: 1,
    onChange: (_e, value) => setPage(value),
  });

  return (
    <StyledNav>
      <StyledUl>
        {items.map(({ page, type, ...item }) => {
          const isFirstOrLastElement = type === 'first' || type === 'last';
          const isEllipsis = type === 'start-ellipsis' || type === 'end-ellipsis';
          const isSelected = page === currentPage;

          return (
            <li key={`${page}${type}`}>
              {isEllipsis ? (
                '...'
              ) : (
                <StyledButton
                  type="button"
                  isSelected={isSelected}
                  isFirstOrLastElement={isFirstOrLastElement}
                  {...item}
                >
                  {isFirstOrLastElement ? capitalize(type) : page}
                </StyledButton>
              )}
            </li>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};
