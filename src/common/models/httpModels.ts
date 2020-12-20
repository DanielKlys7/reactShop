export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export enum Cors {
    NoCors = 'no-cors',
    Cors = 'cors',
    SameOrigin = 'same-origin',
}

export type HttpBody<T> = Record<string, T>;
