import axios, { AxiosResponse } from 'axios';

export enum apiRoutes {
	Filter = '/filter.php',
	List = '/list.php'
}

const API_BASE_URL = 'https://the-cocktail-db.p.rapidapi.com';

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
		'x-rapidapi-key': 'bae889ed87msh696f24572b6654ep103bb5jsn1e526662dae2'
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
