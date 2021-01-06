import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { DebounceInput } from 'react-debounce-input';

import { httpService } from 'core/services';
import { apiRoutes, itemsPerPage } from 'core/variablesConfig';
import { createProductApiRequest, minutesToMs } from 'common/helpers';
import { Loader } from 'common/components/Loader';
import { Pagination } from 'common/components/Pagination';
import { Checkbox } from 'common/components/Checkbox';
import { ProductCard } from './ProductCard';
import { ContentWrapper } from '../styles/Products';

interface ShopItem {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

export const Products = () => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isPromo, setIsPromo] = useState<boolean>(false);
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
    { keepPreviousData: true, staleTime: minutesToMs(10) },
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
        <Checkbox
          label="promo"
          isActive={isPromo}
          onClick={() => setIsPromo(wasPromo => !wasPromo)}
        />
        <Checkbox
          label="active"
          isActive={isActive}
          onClick={() => setIsActive(wasActive => !wasActive)}
        />
        <Pagination amountOfPages={data.meta.totalPages} currentPage={page} setPage={setPage} />

        <ContentWrapper>
          {data.items.map(({ image, name, description, rating, promo, active }: ShopItem) => (
            <ProductCard
              key={`${name}${description}`}
              image={image}
              name={name}
              description={description}
              rating={rating}
              isPromo={promo}
              isActive={active}
            />
          ))}
        </ContentWrapper>
      </>
    )
  );
};
