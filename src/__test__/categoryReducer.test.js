import { getModel } from 'redux-loop';
import { setActiveCategory } from '../store/actions/categoryAction';
import { initialState as categoryState, categoryReducer } from '../store/reducers/categoryReducer';

describe('Category reducer', () => {
	it('should set active category', () => {
		const categoryNameMock = 'Cocoa';
		const result = categoryReducer(categoryState, setActiveCategory('Cocoa'));

		expect(getModel(result)).toBe(categoryNameMock);
	});

	it('should override active category', () => {
		const categoryNameMock = 'Cocoa';
		const state = 'Cocktail';

		const result = categoryReducer(state, setActiveCategory('Cocoa'));

		expect(getModel(result)).toBe(categoryNameMock);
	});
});
