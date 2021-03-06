import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';

import { siblingRange, visibilityOnStartAndEnd } from 'core/variablesConfig';
import { capitalize } from 'common/helpers';
import { useQueryParamsContext } from 'modules/products/contexts/query';
import { StyledNav, StyledUl, StyledButton } from '../styles/Pagination';

interface PaginationProps {
  amountOfPages: number;
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({ amountOfPages }) => {
  const { page: currentPage, setPage } = useQueryParamsContext();
  const { items } = usePagination({
    count: amountOfPages,
    hidePrevButton: true,
    hideNextButton: true,
    showFirstButton: true,
    showLastButton: true,
    boundaryCount: visibilityOnStartAndEnd,
    siblingCount: siblingRange,
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
