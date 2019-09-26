import { SET_ACTIVE_CATEGORY, Action as categoryAction, fetchActiveCategoryDrinks } from '../actions/categoryAction';
import { Action as drinksAction } from '../actions/drinksAction';

type Actions = categoryAction | drinksAction;

const cancelAction = 'CANCEL_ACTION';

export const serviceInterceptor = (store: any) => (next: any) => (action: Actions) => {
	if (action.type === SET_ACTIVE_CATEGORY) {
		if (action.value === store.getState().activeCategory) {
			return next({ type: cancelAction });
		}

		if (!store.getState().drinks.drinksLists.hasOwnProperty(action.value.toLowerCase())) {
			store.dispatch(fetchActiveCategoryDrinks(action.value));
			return next(action);
		}
	}

	return next(action);
};
