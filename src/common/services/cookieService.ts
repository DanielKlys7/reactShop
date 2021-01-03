import Cookies from 'js-cookie';

export class CookieService {
  getItem<T>(fieldName: string): T | null {
    const cookieItem = Cookies.get(fieldName);

    return cookieItem ? JSON.parse(cookieItem) : null;
  }

  setItem(fieldName: string, data: object, expires = 1) {
    Cookies.set(fieldName, data, { expires });
  }

  removeItem(fieldName: string) {
    Cookies.remove(fieldName);
  }
}
