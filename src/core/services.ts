import { AuthService } from 'common/services/authService';
import { CookieService } from 'common/services/cookieService';
import { HttpService } from '../common/services/httpService';

export const httpService = new HttpService(
  'https://join-tsh-api-staging.herokuapp.com',
);
export const cookieService = new CookieService();
export const authService = new AuthService(httpService, cookieService);
