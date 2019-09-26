import { LoopReducer, Loop, loop, Cmd } from 'redux-loop';
import * as drinksActions from '../actions/drinksAction';
import { getDrinksByCategory } from '../../services/filter/filterService';
import { getDrinkDetails } from '../../services/lookup/drinkDetails';
import { getRandomDrink } from '../../services/lookup/randomDrink';
import { IDrink, IDrinkDetails } from '../../models/drink.model';
import { IDrinkListHash } from '../../models/drinksList.model';
import { Actions } from '..';

export type DrinksState = {
	drinksList: IDrink[];
	drinksLists: IDrinkListHash;
	displayDrink: IDrinkDetails | null;
};

export const initialState = {
	drinksList: [],
	drinksLists: {},
	displayDrink: null
};

export const drinksReducer: LoopReducer<DrinksState, Actions> = (
	state: DrinksState = initialState,
	action: Actions
): DrinksState | Loop<DrinksState, Actions> => {
	switch (action.type) {
		case drinksActions.FETCH_DRINKS_LIST:
			return loop(
				state,
				Cmd.run(getDrinksByCategory, {
					successActionCreator: drinksActions.fetchDrinksListSuccess,
					failActionCreator: drinksActions.fetchDrinksListFail,
					args: [ action.value, Cmd.getState ]
				})
			);
		case drinksActions.FETCH_DRINKS_LIST_SUCCESS:
			const { category, drinks } = action.value;

			return loop(
				{
					...state,
					drinksLists: {
						...state.drinksLists,
						[category]: drinks
					},
					displayDrink: null
				},
				Cmd.action({ type: drinksActions.SET_ACTIVE_DRINKS_LIST, value: drinks })
			);

		// case drinksActions.UNSET_DRINK_DETAILS:
		// 	return {
		// 		...state,
		// 		displayDrink: null
		// 	};

		case drinksActions.GET_RANDOM_DRINK:
			return loop(
				state,
				Cmd.run(getRandomDrink, {
					successActionCreator: drinksActions.fetchDrinkDetailsSuccess,
					failActionCreator: drinksActions.fetchDrinkDetailsFail
				})
			);

		case drinksActions.FETCH_DRINK_DETAILS:
			return loop(
				state,
				Cmd.run(getDrinkDetails, {
					successActionCreator: drinksActions.fetchDrinkDetailsSuccess,
					failActionCreator: drinksActions.fetchDrinkDetailsFail,
					args: [ action.value ]
				})
			);

		case drinksActions.FETCH_DRINK_DETAILS_SUCCESS:
			return {
				...state,
				displayDrink: action.value
			};

		default:
			return state;
	}
};
