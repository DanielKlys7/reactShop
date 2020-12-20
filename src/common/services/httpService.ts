import { HttpMethod, Cors } from '../models/httpModels';

export class HttpService {
    constructor(protected readonly baseUrl: string) {}

    GET(path: string) {
        return this.makeRequest(path, HttpMethod.GET);
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
        const url = `${this.baseUrl}/${route}`;
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
