import axios, { AxiosResponse } from 'axios';

export enum apiRoutes {
	Filter = '/filter.php',
	List = '/list.php',
	Lookup = '/lookup.php'
}

const API_BASE_URL = `https://${process.env.REACT_APP_RAPIDAPI_HOST}`;

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
		'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
	}
});

const unwrapData = (r: AxiosResponse) => r.data || {};

export const get = <T = any>(path: apiRoutes, queryParams: object = {}): Promise<T> => {
	const requestConfig = {
		...{ params: queryParams }
	};

	return api.get(path, requestConfig).then(unwrapData).catch((error: ErrorEvent) => {
		console.log(error);
	});
};
