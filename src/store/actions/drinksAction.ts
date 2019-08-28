import { IDrink, IDrinkDetails } from '../../models/drink.model';

export const FETCH_DRINKS_LIST = 'FETCH_DRINKS_LIST';
export const FETCH_DRINKS_LIST_SUCCESS = 'FETCH_DRINKS_LIST_SUCCESS';
export const FETCH_DRINKS_LIST_FAIL = 'FETCH_DRINKS_LIST_FAIL';
export const GET_RANDOM_DRINK = 'GET_RANDOM_DRINK';
export const FETCH_DRINK_DETAILS = 'FETCH_DRINK_DETAILS';
export const FETCH_DRINK_DETAILS_SUCCESS = 'FETCH_DRINK_DETAILS_SUCCESS';
export const FETCH_DRINK_DETAILS_FAIL = 'FETCH_DRINK_DETAILS_FAIL';

export type FETCH_DRINKS_LIST = typeof FETCH_DRINKS_LIST;
export type FETCH_DRINKS_LIST_SUCCESS = typeof FETCH_DRINKS_LIST_SUCCESS;
export type FETCH_DRINKS_LIST_FAIL = typeof FETCH_DRINKS_LIST_FAIL;
export type GET_RANDOM_DRINK = typeof GET_RANDOM_DRINK;
export type FETCH_DRINK_DETAILS = typeof FETCH_DRINK_DETAILS;
export type FETCH_DRINK_DETAILS_SUCCESS = typeof FETCH_DRINK_DETAILS_SUCCESS;
export type FETCH_DRINK_DETAILS_FAIL = typeof FETCH_DRINK_DETAILS_FAIL;

export type Action =
	| { type: FETCH_DRINKS_LIST; value: String }
	| { type: FETCH_DRINKS_LIST_SUCCESS; value: IDrink[] }
	| { type: FETCH_DRINKS_LIST_FAIL }
	| { type: GET_RANDOM_DRINK }
	| { type: FETCH_DRINK_DETAILS; value: String }
	| { type: FETCH_DRINK_DETAILS_SUCCESS; value: IDrinkDetails }
	| { type: FETCH_DRINK_DETAILS_FAIL };

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

export function getRandomDrink(): Action {
	return {
		type: GET_RANDOM_DRINK
	};
}

export function fetchDrinkDetails(drinkId: string): Action {
	return {
		type: FETCH_DRINK_DETAILS,
		value: drinkId
	};
}

export function fetchDrinkDetailsSuccess(value: IDrinkDetails): Action {
	return {
		type: FETCH_DRINK_DETAILS_SUCCESS,
		value
	};
}

export function fetchDrinkDetailsFail(): Action {
	return {
		type: FETCH_DRINK_DETAILS_FAIL
	};
}
