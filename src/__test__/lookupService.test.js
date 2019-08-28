import { getDrinkDetails } from '../services/lookup/drinkDetails';
import axiosMock from 'axios';

describe('Drink Details endpoint', () => {
	it('gets a drink details based on passed drinkId', async () => {
		const apiMockResponse = {
			drinks: [
				{
					idDrink: '17254',
					strDrink: 'Bijou',
					strDrinkAlternate: null,
					strDrinkES: null,
					strDrinkDE: null,
					strDrinkFR: null,
					'strDrinkZH-HANS': null,
					'strDrinkZH-HANT': null,
					strTags: null,
					strVideo: null,
					strCategory: 'Cocktail',
					strIBA: null,
					strAlcoholic: 'Alcoholic',
					strGlass: 'Cocktail glass',
					strInstructions: 'Stir in mixing glass with ice and strain',
					strInstructionsES: null,
					strInstructionsDE: 'In Mischglas mit Eis verrühren und abseihen.',
					strInstructionsFR: null,
					'strInstructionsZH-HANS': null,
					'strInstructionsZH-HANT': null,
					strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg',
					strIngredient1: 'Orange Bitters',
					strIngredient2: 'Green Chartreuse',
					strIngredient3: 'Gin',
					strIngredient4: 'Sweet Vermouth',
					strIngredient5: null,
					strIngredient6: null,
					strIngredient7: null,
					strIngredient8: null,
					strIngredient9: null,
					strIngredient10: null,
					strIngredient11: null,
					strIngredient12: null,
					strIngredient13: null,
					strIngredient14: null,
					strIngredient15: null,
					strMeasure1: '1 dash',
					strMeasure2: '1 oz',
					strMeasure3: '1 oz',
					strMeasure4: '1 oz',
					strMeasure5: null,
					strMeasure6: null,
					strMeasure7: null,
					strMeasure8: null,
					strMeasure9: null,
					strMeasure10: null,
					strMeasure11: null,
					strMeasure12: null,
					strMeasure13: null,
					strMeasure14: null,
					strMeasure15: null,
					strCreativeCommonsConfirmed: 'No',
					dateModified: '2017-12-19 18:09:45'
				}
			]
		};

		const expectedMockData = {
			drinkName: 'Bijou',
			drinkId: '17254',
			drinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg',
			category: 'Cocktail',
			glass: 'Cocktail glass',
			instructions: 'Stir in mixing glass with ice and strain',
			ingredients: [
				{
					ingredient: 'Orange Bitters',
					measurement: '1 dash'
				},
				{
					ingredient: 'Green Chartreuse',
					measurement: '1 oz'
				},
				{
					ingredient: 'Gin',
					measurement: '1 oz'
				},
				{
					ingredient: 'Sweet Vermouth',
					measurement: '1 oz'
				}
			]
		};

		axiosMock.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: apiMockResponse
			})
		);

		const result = await getDrinkDetails();

		expect(result).toEqual(expectedMockData);
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get).toHaveReturned();
	});
});
