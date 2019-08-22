import axios from 'axios';

// import { get, apiRoutes } from '../api';
// eslint-disable-next-line
const mapToModel = (data: any) => {
	return data.map((item: any) => {
		return {
			drinkName: item.strDrink,
			drinkId: item.idDrink,
			drinkThumb: item.strDrinkThumb
		};
	});
};

export const getDrinksByCategory = (categoryName: string) => {
	const apiCompatName = categoryName.replace(' ', '_');

	// prettier-ignore
	return axios.get('/filter.php', {
		baseURL: `https://${process.env.REACT_APP_RAPIDAPI_HOST}`,
		headers: {
			'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
			'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
		},
		params: {
			c: apiCompatName
		}
	})
	.then((resp) => {
		console.log(resp.data);
		
		return mapToModel(resp.data.drinks);
	});
};
