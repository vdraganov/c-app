import { getModel, getCmd } from 'redux-loop';
import * as drinksActions from '../store/actions/drinksAction';
import { getDrinksByCategory } from '../services/filter/filterService';
import { getDrinkDetails } from '../services/lookup/drinkDetails';
import { initialState as drinksState, drinksReducer } from '../store/reducers/drinksReducer';

describe('Drinks reducer', () => {
	it('should execute fetch drinks list', () => {
		const result = drinksReducer(drinksState, drinksActions.fetchDrinksList('Cocoa'));

		expect(getModel(result)).toEqual(drinksState);
		expect(getCmd(result).func).toEqual(getDrinksByCategory);

		expect(getCmd(result).args).toHaveLength(1);
		expect(getCmd(result).args).toContain('Cocoa');
	});

	it('should handle FETCH_DRINKS_LIST_SUCCESS', () => {
		const drinksMock = [
			{
				drinkName: '3 Wise Men',
				drinkId: '13899',
				drinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg'
			}
		];
		const expectedState = {
			...drinksState,
			drinksList: drinksMock
		};

		const result = drinksReducer(drinksState, drinksActions.fetchDrinksListSuccess(drinksMock));

		expect(result).toEqual(expectedState);
	});

	it('should execute fetch drink details', () => {
		const drinkId = '11243';
		const result = drinksReducer(drinksState, drinksActions.fetchDrinkDetails(drinkId));

		expect(getModel(result)).toEqual(drinksState);
		expect(getCmd(result).func).toEqual(getDrinkDetails);
		expect(getCmd(result).args).toHaveLength(1);
		expect(getCmd(result).args).toContain(drinkId);
	});

	it('should handle FETCH_DRINK_DETAILS', () => {
		const drinkDetailsMock = {
			drinkName: 'Bijou',
			drinkId: '17254',
			drinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg',
			category: 'Cocktail',
			glass: 'Cocktail glass',
			instructions: 'Stir in mixing glass with ice and strain'
		};

		const expectedState = {
			...drinksState,
			displayDrink: drinkDetailsMock
		};

		const result = drinksReducer(drinksState, drinksActions.fetchDrinkDetailsSuccess(drinkDetailsMock));

		expect(result).toEqual(expectedState);
	});
});
