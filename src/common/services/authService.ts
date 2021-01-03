import jwt_decode from 'jwt-decode';
import { jwt } from 'core/variablesConfig';
import { CookieService } from './cookieService';
import { HttpService } from './httpService';

interface LoginResponse {
  username: string;
  sub: string;
  iat: number;
  exp: number;
}

export class AuthService {
  constructor(
    protected readonly httpService: HttpService,
    protected readonly cookieService: CookieService,
  ) {}

  async login(usernameToValidate: string, passwordToValidate: string) {
    const response = await this.httpService.POST('user/login', {
      username: usernameToValidate,
      password: passwordToValidate,
    });

    if (response.status === 401 || response.status === 404) {
      return {
        errorMessage: 'Either username or password was wrong.',
      };
    }

    const { access_token } = await response.json();
    const decodedData = jwt_decode<LoginResponse>(access_token);

    this.cookieService.setItem(jwt, access_token);

    return {
      username: decodedData.username,
      uid: Number(decodedData.sub),
    };
  }
}
