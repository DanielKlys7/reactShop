import { createContext, useState, useContext } from 'react';

import { assertContextPresent } from 'common/helpers/assertContextPresent';
import { SetState } from 'common/types/ReactSetStateAction';

export interface QueryParamsContext {
  page: number;
  setPage: SetState<number>;
  isActive: boolean;
  setIsActive: SetState<boolean>;
  isPromo: boolean;
  setIsPromo: SetState<boolean>;
  search: string;
  setSearch: SetState<string>;
}

export const useQueryParams = (): QueryParamsContext => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isPromo, setIsPromo] = useState<boolean>(false);
  const [search, setSearch] = useState('');

  return {
    page,
    setPage,
    isActive,
    setIsActive,
    isPromo,
    setIsPromo,
    search,
    setSearch,
  };
};

export const useQueryParamsContext = () => {
  const context = useContext(queryParamsContext);

  assertContextPresent(context);

  return context;
};

export const queryParamsContext = createContext<QueryParamsContext | null>(null);
export const { Provider: QueryParamsProvider } = queryParamsContext;
