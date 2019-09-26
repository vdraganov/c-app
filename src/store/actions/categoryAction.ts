export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';
export const FETCH_ACTIVE_CATEGORY_DRINKS = 'FETCH_ACTIVE_CATEGORY_DRINKS';

export type SET_ACTIVE_CATEGORY = typeof SET_ACTIVE_CATEGORY;
export type FETCH_ACTIVE_CATEGORY_DRINKS = typeof FETCH_ACTIVE_CATEGORY_DRINKS;

export type Action =
	// UI actions
	{ type: SET_ACTIVE_CATEGORY; value: string } | { type: FETCH_ACTIVE_CATEGORY_DRINKS; value: string };

export function setActiveCategory(value: string): Action {
	return {
		type: SET_ACTIVE_CATEGORY,
		value
	};
}

export function fetchActiveCategoryDrinks(value: string): Action {
	return {
		type: FETCH_ACTIVE_CATEGORY_DRINKS,
		value
	};
}
