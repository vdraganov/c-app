import * as React from 'react';
import styled from 'styled-components';
import { IDrinkDetails } from '../models/drink.model';

interface OwnProps {
	drinkDetails: IDrinkDetails;
}

export const DrinkDetailsCard: React.FunctionComponent<OwnProps> = ({ drinkDetails }: OwnProps): JSX.Element => (
	<StyledDrinkDetailsCard id={drinkDetails.drinkId}>
		<img srcSet={drinkDetails.drinkThumb} alt="" />
		<div className="details-wrapper">
			<div className="details-header-wrapper">
				<h2>{drinkDetails.drinkName}</h2>
			</div>
			<div className="details-container">
				<div className="details-category-wrapper">
					<div className="drinks-category-pill">{drinkDetails.category}</div>
				</div>
				<div className="details-ingredients-wrapper">
					Ingredients:
					<ul>
						{drinkDetails.ingredients.map((ing, i) => {
							return (
								<li key={i}>
									{ing.measurement} {ing.ingredient}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="details-instructions-wrapper">{drinkDetails.instructions}</div>
			</div>
		</div>
	</StyledDrinkDetailsCard>
);

const StyledDrinkDetailsCard = styled.div`
	margin: 20px;
	display: flex;
	text-align: left;
	border: #000 solid 2px;

	> img {
		width: 40%;
	}

	> .details-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		> .details-header-wrapper {
			color: #000;
			background-color: #ff0;
			margin: 0;
			padding: 0.83em;
		}

		> .details-container {
			padding-left: 20px;

			> .details-category-wrapper {
				margin: 10px 0;
				color: #ff0;

				> .drinks-category-pill {
					display: inline-block;
					padding: 0.6em;
					background-color: #000;
					font-size: 0.8em;
					border-radius: 0.8em;
				}
			}

			> .details-ingredients-wrapper {
				ul {
					margin-top: 0.4em;
				}
				color: #fff;
			}

			> .details-instructions-wrapper {
				color: #fff;
				font-size: 0.9em;
				margin-bottom: 1em;
				margin-right: 1em;
				white-space: pre-line;
				text-align: justify;
			}
		}
	}
`;
