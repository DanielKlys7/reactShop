import { getScreenResolution } from 'common/helpers/getScreenResolution';

export const jwt = 'jwt';

export const apiRoutes: Record<string, string> = {
  login: '/user/login',
  product: '/product',
};

export const itemsPerPage = 8;
export const siblingRange = 1;
export const visibilityOnStartAndEnd = 1;

export const colors = {
  white: '#FFFFFF',
  primary: '#4460F7',
  primaryDark: '#2140E8',
  secondary: '#F9A52B',
  gray100: '#F0F1F5',
  gray200: '#E0E2EA',
  gray300: '#B9BDCF',
  gray400: '#9194A5',
  gray500: '#1A1B1D',
};

export const breakpoints = {
  phone: '576px',
  tablet: '768px',
  smallerDesktop: '992px',
  desktop: '1200px',
};
