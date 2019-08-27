import React from 'react';
import { configure, shallow } from 'enzyme';
import { CategoryItem } from '../components/CategoryItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Category item component', () => {
	it('Click event on the category returns category name', () => {
		// add a test if item is rendered
		// add a test if item is rendered with proper fields
		const mockCategoryItem = shallow(<CategoryItem />);
		const mockDrinkName = 'Cocktail';
		const mockClickHandler = jest.fn();

		mockCategoryItem.setProps({
			name: mockDrinkName,
			onClickHandler: mockClickHandler,
			isActive: true
		});

		mockCategoryItem.simulate('click');

		expect(mockClickHandler).toBeCalled();
		expect(mockClickHandler).toBeCalledWith(mockDrinkName);
		expect(mockClickHandler).toHaveReturned();
	});
});
