import { createProductApiRequest } from 'common/helpers';

describe('createProductApiRequest should correctly creates api query of given props', () => {
  test('createProductApiRequest creates correct query', () => {
    const route = '/kitten';
    const props = {
      search: 'kitten',
      shouldBeAdored: true,
    };

    const res = '/kitten?search=kitten&shouldBeAdored=true';

    expect(createProductApiRequest(route, props)).toEqual(res);
  });
});
