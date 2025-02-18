import axios from 'axios';

import { API_URL } from '@/utils/constants';

export const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: { 'X-Custom-Header': 'foobar'},
});