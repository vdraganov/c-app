import { get, apiRoutes } from '../api';

const mapToModel = (data: any) => {
	return data.map((item: any) => {
		return {
			drinkName: item.strDrink,
			drinkId: item.idDrink,
			drinkThumb: item.strDrinkThumb
		};
	});
};

export const getDrinksByCategory = (categoryName: string, getState: any) => {
	const apiCompatName = categoryName.replace(' ', '_');

	return get(apiRoutes.Filter, { c: apiCompatName }).then((resp) => {
		return {
			category: getState().activeCategory.toLowerCase(),
			drinks: mapToModel(resp.drinks)
		};
	});
};
