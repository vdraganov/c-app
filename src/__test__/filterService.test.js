import { getDrinksByCategory } from '../services/filter/filterService';
import { apiRoutes } from '../services/api';
import axiosMock from 'axios';

describe('Category filter endpoint', () => {
	it('gets a list of drinks based on provided category', async () => {
		const mockValue = 'Cocoa';
		const apiMockResponse = {
			drinks: [
				{
					idDrink: 'mock_drinkId',
					strDrink: 'mock_drinkName',
					strDrinkThumb: 'mock_drinkThumb'
				}
			]
		};

		const expectedMockData = [
			{
				drinkId: 'mock_drinkId',
				drinkName: 'mock_drinkName',
				drinkThumb: 'mock_drinkThumb'
			}
		];

		axiosMock.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: apiMockResponse
			})
		);

		const result = await getDrinksByCategory(mockValue);

		expect(result).toEqual(expectedMockData);
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get).toHaveBeenLastCalledWith(apiRoutes.Filter, { params: { c: mockValue } });
	});
});
