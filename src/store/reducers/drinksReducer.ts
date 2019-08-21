import { LoopReducer, Loop, loop, Cmd } from 'redux-loop';
import * as drinksActions from '../actions/drinksAction';
import { getDrinksByCategory } from '../../services/filter/filterService';
import { IDrink } from '../../models/drink.model';
import { Actions } from '..';

export type DrinksState = IDrink[];

export const initialState = [];

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
			return [ ...action.value ];
		default:
			return state;
	}
};
