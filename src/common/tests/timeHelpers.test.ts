import { minutesToMs, secondsToMs } from 'common/helpers';

describe('time helpers should correctly calculate time', () => {
  test('secondsToMs calculates ms correctly', () => {
    const seconds = 10;

    const res = 10000;

    expect(secondsToMs(seconds)).toEqual(res);
  });

  test('minutesToMs calculates ms correctly', () => {
    const minutes = 1;

    const res = 60000;

    expect(minutesToMs(minutes)).toEqual(res);
  });
});
