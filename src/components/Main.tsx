import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DrinkCard } from './DrinkCard';
import { DrinkDetailsCard } from './DrinkDetailsCard';
import { IDrink, IDrinkDetails } from '../models/drink.model';
import { IStore } from '../store';
import { fetchDrinkDetails, Action } from '../store/actions/drinksAction';

interface OwnProps {
	drinks: IDrink[];
	displayDrink: IDrinkDetails | null;
}

interface DispatchProps {
	fetchDrinkDetails: (value: string) => Action;
}

type Props = OwnProps & DispatchProps;

class Main extends React.Component<Props> {
	sliderSettings = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 6,
		slidesToScroll: 6
	};

	render() {
		return (
			<StyledMainContainer>
				{this.props.displayDrink ? (
					<div className="slider-wrapper">
						<DrinkDetailsCard drinkDetails={this.props.displayDrink} />
						<Slider {...this.sliderSettings}>
							{this.props.drinks.map((d) => (
								<DrinkCard
									className="slider-card"
									key={`slider_${d.drinkId}`}
									drinkId={d.drinkId}
									drinkName={d.drinkName}
									drinkThumb={d.drinkThumb}
									clickHandler={this.props.fetchDrinkDetails}
								/>
							))}
						</Slider>
					</div>
				) : (
					<StyledDrinksContainer>
						{this.props.drinks.map((d) => (
							<DrinkCard
								key={d.drinkId}
								drinkId={d.drinkId}
								drinkName={d.drinkName}
								drinkThumb={d.drinkThumb}
								clickHandler={this.props.fetchDrinkDetails}
							/>
						))}
					</StyledDrinksContainer>
				)}
			</StyledMainContainer>
		);
	}
}

function mapStateToProps(state: IStore): OwnProps {
	return {
		drinks: state.drinks.drinksList,
		displayDrink: state.drinks.displayDrink
	};
}

const mapDispatchToProps: DispatchProps = {
	fetchDrinkDetails
};

const StyledMainContainer = styled.div`
	display: flex;
	width: 100%;
	margin: 0.5em;

	> .slider-wrapper {
		background-color: #293133;
		width: 80%;
		padding: 0 40px 30px;
	}

	> * {
		flex: 1 100%;
	}
`;

const StyledDrinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
