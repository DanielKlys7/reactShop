import { HttpService } from '../common/services/httpService';

export const httpService = new HttpService(
    'https://join-tsh-api-staging.herokuapp.com',
);
