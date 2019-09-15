import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {CONFIG} from '../config'

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = localStorage.getItem('token');
	options.headers.set('Authorization', `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

export const RESTBackendProvider = simpleRestProvider(CONFIG.BACKEND_URL, httpClient);

export default RESTBackendProvider;
