import React from 'react';
import { useQuery } from 'react-query';

import { httpService } from 'core/services';
import { apiRoutes, itemsPerPage } from 'core/variablesConfig';
import { createProductApiRequest, minutesToMs } from 'common/helpers';
import { Loader, Pagination, Empty, Header } from 'common/components';
import { ProductCard } from './ProductCard';
import { ContentWrapper, ItemsWrapper } from '../styles/Products';
import { useQueryParamsContext } from '../contexts/query';

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
  const { page, isActive, isPromo, search } = useQueryParamsContext();
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

  if (isLoading) {
    return (
      <ContentWrapper>
        <Header />
        <Loader />
      </ContentWrapper>
    );
  }

  if (isError) {
    return (
      <ContentWrapper>
        <Header />
        <Empty />
      </ContentWrapper>
    );
  }

  return (
    data && (
      <ContentWrapper>
        <Header />
        {data.items.length > 0 ? (
          <>
            <ItemsWrapper>
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
            </ItemsWrapper>
            <Pagination amountOfPages={data.meta.totalPages} />
          </>
        ) : (
          <Empty />
        )}
      </ContentWrapper>
    )
  );
};
