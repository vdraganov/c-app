import { get, apiRoutes } from '../api';
import { mapToModel } from '../../utils/drinkDetailsConversion';

import { IDrinkDetails } from '../../models/drink.model';

export const getDrinkDetails = async (drinkId: string): Promise<IDrinkDetails> => {
	return get(apiRoutes.Lookup, { i: drinkId }).then((resp) => mapToModel(resp.drinks));
};
