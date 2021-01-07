import { capitalize } from 'common/helpers';

describe('capitalize should correctly capitalize any given string', () => {
  test('capitlize capitalizes string', () => {
    const stringToCapitalize = 'hello World!';

    const res = 'Hello World!';

    expect(capitalize(stringToCapitalize)).toEqual(res);
  });
});
