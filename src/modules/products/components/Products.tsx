import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { DebounceInput } from 'react-debounce-input';

import { httpService } from 'core/services';
import { apiRoutes, itemsPerPage } from 'core/variablesConfig';
import { createProductApiRequest } from 'common/helpers/createProductApiRequest';
import { Loader } from 'common/components/Loader';
import { Pagination } from 'common/components/Pagination';

export const Products = () => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery(
    ['products', page, itemsPerPage, isActive, isPromo, search],
    () =>
      httpService.GET(
        createProductApiRequest(apiRoutes.product, {
          page,
          search,
          limit: itemsPerPage,
          promo: isPromo,
          active: isActive,
        }),
      ),
    { keepPreviousData: true },
  );

  if (isLoading) return <Loader />;

  if (isError) return <div>Something went wrong</div>;

  return (
    data && (
      <>
        <h2>Products page</h2>
        <DebounceInput
          debounceTimeout={500}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {data && (
          <Pagination
            amountOfPages={data.meta.totalPages}
            currentPage={page}
            setPage={setPage}
          />
        )}
      </>
    )
  );
};
