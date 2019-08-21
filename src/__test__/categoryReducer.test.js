import { getModel } from 'redux-loop';
import { setActiveCategory } from '../store/actions/categoryAction';
import { initialState as categoryState, categoryReducer } from '../store/reducers/categoryReducer';

describe('Category reducer', () => {
	it('correctly sets category name', () => {
		const categoryNameMock = 'Cocoa';
		const result = categoryReducer(categoryState, setActiveCategory('Cocoa'));

		expect(getModel(result)).toBe(categoryNameMock);
	});

	it('correctly overides category name', () => {
		const categoryNameMock = 'Cocoa';
		const state = 'Cocktail';

		const result = categoryReducer(state, setActiveCategory('Cocoa'));

		expect(getModel(result)).toBe(categoryNameMock);
	});
});
