import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { DrinkCard } from './DrinkCard';
import { IDrink } from '../models/drink.model';
import { IStore } from '../store';

interface OwnProps {
	drinks: IDrink[];
}

type Props = OwnProps;

class Main extends React.Component<Props> {
	handleClick(drinkId: string) {
		// @todo fetch the drink by the id and change the view to display the
		// obtained from the endpoint data.
		console.log(drinkId);
	}

	render() {
		return (
			<StyledDrinksContainer>
				{this.props.drinks.map((d) => (
					<DrinkCard
						key={d.drinkId}
						drinkId={d.drinkId}
						drinkName={d.drinkName}
						drinkThumb={d.drinkThumb}
						clickHandler={this.handleClick}
					/>
				))}
			</StyledDrinksContainer>
		);
	}
}

function mapStateToProps(state: IStore): OwnProps {
	return {
		drinks: state.drinks
	};
}

export default connect(mapStateToProps)(Main);

const StyledDrinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
