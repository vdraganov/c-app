import { getModel, getCmd } from 'redux-loop';
import * as drinksActions from '../store/actions/drinksAction';
import { getDrinksByCategory } from '../services/filter/filterService';
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
});
