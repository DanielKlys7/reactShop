export class HttpService {
  constructor(protected readonly baseUrl: string) {}

  async GET(path: string) {
    const response = await this.makeRequest(path, HttpMethod.GET);
    const data = await response.json();

    return data;
  }

  POST<T>(path: string, body?: T) {
    return this.makeRequest(path, HttpMethod.POST, body);
  }

  makeRequest<T>(
    route: string,
    method: HttpMethod,
    body?: T,
    headers?: Record<string, string>,
    mode?: Cors,
  ) {
    const url = `${this.baseUrl}${route}`;
    const stringifiedBody = JSON.stringify(body);
    const corsMode = mode || 'cors';

    return fetch(url, {
      method,
      body: stringifiedBody,
      mode: corsMode,
      headers: headers || { 'Content-type': 'application/json' },
    });
  }
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
enum Cors {
  NoCors = 'no-cors',
  Cors = 'cors',
  SameOrigin = 'same-origin',
}
