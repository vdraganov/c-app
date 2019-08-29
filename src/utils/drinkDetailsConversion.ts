import { IDrinkDetails, IIngredient } from '../models/drink.model';

export const modifyInstructionsNotes = (str: string = ''): string => {
	const regEx = new RegExp(/notes?:/, 'gmi');

	return str.replace(regEx, '\n\n*Notes:');
};

export const mapToModel = (data: any): IDrinkDetails => {
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
