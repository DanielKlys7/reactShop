// this func is created to catch errors synchroniuosly in react dev environment

export function assertContextPresent<R>(value: R | null): asserts value is R {
  if (process.env.NODE_ENV === 'development' && !value) {
    throw new Error('must be used within context provider');
  }
}
