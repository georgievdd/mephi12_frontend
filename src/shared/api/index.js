import axios from 'axios';
export const http = axios.create({
    baseURL: 'http://95.165.3.177:8083/api',
});
