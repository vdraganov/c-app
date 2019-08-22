import { getDrinksByCategory } from './filterServiceCopy';
import axiosMock from 'axios';

describe('Testing the mock of Axios Api', () => {
	it('axios get', async () => {
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

		const axiosData = await getDrinksByCategory('Cocoa');

		expect(axiosData).toEqual(expectedMockData);
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get).toHaveBeenLastCalledWith('/filter.php', {
			baseURL: `https://${process.env.REACT_APP_RAPIDAPI_HOST}`,
			headers: {
				'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
				'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
			},
			params: { c: 'Cocoa' }
		});
	});
});
