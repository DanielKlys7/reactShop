import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { DebounceInput } from 'react-debounce-input';

import { httpService } from 'core/services';
import { apiRoutes } from 'core/variablesConfig';

export const Products = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery(
    ['products', page, itemsPerPage, isActive, isPromo, search],
    () =>
      httpService.GET(
        `${apiRoutes.product}?limit=${itemsPerPage}&page=${page}&promo=${isPromo}&active=${isActive}&search=${search}`,
      ),
    { keepPreviousData: true },
  );

  return (
    <>
      <DebounceInput
        debounceTimeout={500}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <h2>Products page</h2>
    </>
  );
};
