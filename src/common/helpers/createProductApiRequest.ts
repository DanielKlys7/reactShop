export const createProductApiRequest = (
  route: string,
  objectOfProperties: Record<string, string | number | boolean>,
) => {
  const callProps = Object.entries(objectOfProperties)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${route}?${callProps}`;
};
