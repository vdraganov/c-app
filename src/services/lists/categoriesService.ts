import { get, apiRoutes } from '../api';

export const getCategories = () => {
	return get(apiRoutes.List, { c: 'list' }).then((resp) => {
		const data = resp.drinks;

		return data.map((entry: { strCategory: string }) => ({ name: entry.strCategory }));
	});
};
