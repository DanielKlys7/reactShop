import { truncate } from 'common/helpers';

describe('truncate should correctly truncate any given string', () => {
  test('truncate truncates string', () => {
    const stringToTruncate = 'hello World!';

    const res = 'h...';

    expect(truncate(stringToTruncate, 1)).toEqual(res);
  });
});
