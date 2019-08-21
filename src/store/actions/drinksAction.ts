import { IDrink } from '../../models/drink.model';

export const FETCH_DRINKS_LIST = 'FETCH_DRINKS_LIST';
export const FETCH_DRINKS_LIST_SUCCESS = 'FETCH_DRINKS_LIST_SUCCESS';
export const FETCH_DRINKS_LIST_FAIL = 'FETCH_DRINKS_LIST_FAIL';

export type FETCH_DRINKS_LIST = typeof FETCH_DRINKS_LIST;
export type FETCH_DRINKS_LIST_SUCCESS = typeof FETCH_DRINKS_LIST_SUCCESS;
export type FETCH_DRINKS_LIST_FAIL = typeof FETCH_DRINKS_LIST_FAIL;

export type Action =
	| { type: FETCH_DRINKS_LIST; value: String }
	| { type: FETCH_DRINKS_LIST_SUCCESS; value: IDrink[] }
	| { type: FETCH_DRINKS_LIST_FAIL };

export function fetchDrinksList(categoryName: string): Action {
	return {
		type: FETCH_DRINKS_LIST,
		value: categoryName
	};
}

export function fetchDrinksListSuccess(value: IDrink[]): Action {
	return {
		type: FETCH_DRINKS_LIST_SUCCESS,
		value
	};
}

export function fetchDrinksListFail(): Action {
	return {
		type: FETCH_DRINKS_LIST_FAIL
	};
}
