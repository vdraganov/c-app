import { getModel, getCmd } from 'redux-loop';
import * as drinksActions from '../store/actions/drinksAction';
import { getDrinksByCategory } from '../services/filter/filterService';
import { getDrinkDetails } from '../services/lookup/drinkDetails';
import { getRandomDrink } from '../services/lookup/randomDrink';
import { initialState as drinksState, drinksReducer } from '../store/reducers/drinksReducer';

describe('Drinks reducer', () => {
	const drinksMock = [
		{
			drinkName: '3 Wise Men',
			drinkId: '13899',
			drinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg'
		}
	];

	it('should execute fetch drinks list', () => {
		const result = drinksReducer(drinksState, drinksActions.fetchDrinksList('Cocoa'));

		expect(getModel(result)).toEqual(drinksState);
		expect(getCmd(result).func).toEqual(getDrinksByCategory);

		expect(getCmd(result).args).toHaveLength(2);
		expect(getCmd(result).args).toContain('Cocoa');
	});

	it('should handle FETCH_DRINKS_LIST_SUCCESS', () => {
		const mockActionValue = {
			category: 'Shot',
			drinks: drinksMock
		};
		const result = drinksReducer(drinksState, drinksActions.fetchDrinksListSuccess(mockActionValue));

		expect(getCmd(result).actionToDispatch.type).toEqual(drinksActions.SET_ACTIVE_DRINKS_LIST);
		expect(getModel(result).drinksList).toEqual(drinksState.drinksList);
	});

	it('should handle SET_ACTIVE_DRINKS_LIST', () => {
		const expectedState = {
			...drinksState,
			drinksList: drinksMock
		};

		const result = drinksReducer(drinksState, drinksActions.setActiveDrinksList(drinksMock));

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

	it('should execute fetch random drink details', () => {
		const result = drinksReducer(drinksState, drinksActions.fetchRandomDrink());

		expect(getModel(result)).toEqual(drinksState);
		expect(getCmd(result).func).toEqual(getRandomDrink);
	});
});
