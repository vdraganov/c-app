import { get, apiRoutes } from '../api';

import { IDrinkDetails, IIngredient } from '../../models/drink.model';

const modifyInstructionsNotes = (str: string = ''): string => {
	const regEx = new RegExp(/notes?:/, 'gmi');

	return str.replace(regEx, '\n\n*Notes:');
};

const mapToModel = (data: any): IDrinkDetails => {
	const item = data[0];
	const ingredients: IIngredient[] = [];

	Object.keys(item).forEach((key) => {
		if (key.indexOf('strIngredient') !== -1) {
			const position = key.split('strIngredient')[1];

			item[key] &&
				ingredients.push({
					ingredient: item[key],
					measurement: item[`strMeasure${position}`]
				});
		}
	});

	return {
		drinkName: item.strDrink,
		drinkId: item.idDrink,
		drinkThumb: item.strDrinkThumb,
		category: item.strCategory,
		glass: item.strGlass,
		instructions: modifyInstructionsNotes(item.strInstructions),
		ingredients
	};
};

export const getRandomDrink = async (): Promise<IDrinkDetails> => {
	return get(apiRoutes.Random).then((resp) => mapToModel(resp.drinks));
};
