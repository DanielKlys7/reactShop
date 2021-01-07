export const truncate = (string: string, n: number) =>
  string.length > n ? `${string.substr(0, n)}...` : string;
