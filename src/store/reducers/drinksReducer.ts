import { LoopReducer, Loop, loop, Cmd } from 'redux-loop';
import * as drinksActions from '../actions/drinksAction';
import { getDrinksByCategory } from '../../services/filter/filterService';
import { getDrinkDetails } from '../../services/lookup/drinkDetails';
import { getRandomDrink } from '../../services/lookup/randomDrink';
import { IDrink, IDrinkDetails } from '../../models/drink.model';
import { Actions } from '..';

export type DrinksState = {
	drinksList: IDrink[];
	displayDrink: IDrinkDetails | null;
};

export const initialState = {
	drinksList: [],
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
					args: [ action.value ]
				})
			);
		case drinksActions.FETCH_DRINKS_LIST_SUCCESS:
			return {
				...state,
				drinksList: [ ...action.value ],
				displayDrink: null
			};

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
