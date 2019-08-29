import { get, apiRoutes } from '../api';
import { mapToModel } from '../../utils/drinkDetailsConversion';

import { IDrinkDetails } from '../../models/drink.model';

export const getRandomDrink = async (): Promise<IDrinkDetails> => {
	return get(apiRoutes.Random).then((resp) => mapToModel(resp.drinks));
};
