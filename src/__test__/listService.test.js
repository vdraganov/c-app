import { getCategories } from '../services/lists/categoriesService';
import axiosMock from 'axios';

describe('Category lists endpoint', () => {
	it('gets a list of available categories', async () => {
		const apiMockResponse = {
			drinks: [ { strCategory: 'Ordinary Drink' }, { strCategory: 'Shot' }, { strCategory: 'Cocoa' } ]
		};

		const expectedMockData = [
			{
				name: 'Ordinary Drink'
			},
			{
				name: 'Shot'
			},
			{
				name: 'Cocoa'
			}
		];

		axiosMock.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: apiMockResponse
			})
		);

		const result = await getCategories();

		expect(result).toEqual(expectedMockData);
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get).toHaveReturned();
	});
});
