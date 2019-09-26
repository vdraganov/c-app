import { LoopReducer, Loop, loop, Cmd } from 'redux-loop';
import * as categoryActions from '../actions/categoryAction';
import { fetchDrinksList } from '../actions/drinksAction';
import { Actions } from '../index';

export type CategoryState = string;

export const initialState = '';

export const categoryReducer: LoopReducer<CategoryState, Actions> = (
	state: CategoryState = initialState,
	action: Actions
): CategoryState | Loop<CategoryState, Actions> => {
	switch (action.type) {
		case categoryActions.SET_ACTIVE_CATEGORY:
			return action.value;

		case categoryActions.FETCH_ACTIVE_CATEGORY_DRINKS:
			return loop(action.value, Cmd.action(fetchDrinksList(action.value)));

		default:
			return state;
	}
};
