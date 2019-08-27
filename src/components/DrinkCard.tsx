import * as React from 'react';
import styled from 'styled-components';
import { IDrink } from '../models/drink.model';

interface OwnProps extends IDrink {
	className?: string;
	clickHandler: (drinkId: string) => void;
}

export const DrinkCard: React.FunctionComponent<OwnProps> = ({
	className,
	drinkId,
	drinkName,
	drinkThumb,
	clickHandler
}: OwnProps): JSX.Element => (
	<StyledDrinkCard className={className} id={drinkId} onClick={() => clickHandler(drinkId)}>
		<img srcSet={drinkThumb} alt="" />
		<div className="drink-card-title">{drinkName}</div>
	</StyledDrinkCard>
);

const StyledDrinkCard = styled.div`
	width: ${(props) => (props.className ? 'auto' : '200px')};
	margin: 5px;
	background-color: #293133;
	border: 3px solid #222;
	white-space: nowrap;

	flex-grow: 1;

	> img {
		width: 100%;
	}

	.drink-card-title {
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 5px;
		font-size: 80%;
	}

	:hover {
		cursor: pointer;
		border: 3px solid #ff0;
		transform: scale(1.07);
	}
`;
