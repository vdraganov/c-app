import { createStore, compose, applyMiddleware } from 'redux';
import { install, StoreCreator, combineReducers } from 'redux-loop';
import { composeWithDevTools } from 'redux-devtools-extension';
import { serviceInterceptor } from './middleware/serviceInterceptorMiddleware';

import { Action as categoryAction } from './actions/categoryAction';
import { Action as drinksAction } from './actions/drinksAction';
import { categoryReducer, CategoryState } from './reducers/categoryReducer';
import { drinksReducer, DrinksState, initialState as drinksInit } from './reducers/drinksReducer';

export type IStore = {
	activeCategory: CategoryState;
	drinks: DrinksState;
};

export type Actions = categoryAction | drinksAction;

export const rootReducer = combineReducers<IStore, Actions>({
	activeCategory: categoryReducer,
	drinks: drinksReducer
});

export const initialState: IStore = {
	activeCategory: '',
	drinks: drinksInit
};

export const enhancedCreateStore = createStore as StoreCreator;

let enhancer = compose(install<IStore>(), composeWithDevTools(applyMiddleware(serviceInterceptor)));

export const store = enhancedCreateStore(rootReducer, initialState, enhancer);
