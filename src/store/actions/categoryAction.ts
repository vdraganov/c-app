export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export type SET_ACTIVE_CATEGORY = typeof SET_ACTIVE_CATEGORY;

export type Action =
	// UI actions
	{ type: SET_ACTIVE_CATEGORY; value: string };

export function setActiveCategory(value: string): Action {
	return {
		type: SET_ACTIVE_CATEGORY,
		value
	};
}
