export interface IDrink {
	drinkName: string;
	drinkId: string;
	drinkThumb: string;
}

export interface IIngredient {
	ingredient: string;
	measurement: string;
}

export interface IDrinkDetails extends IDrink {
	instructions: string;
	category: string;
	glass: string;
	ingredients: IIngredient[];
}
