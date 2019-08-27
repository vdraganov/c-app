import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setActiveCategory, Action } from '../store/actions/categoryAction';

import { getCategories } from '../services/lists/categoriesService';
import { CategoryItem } from './CategoryItem';
import { IStore } from '../store/index';

interface IState {
	categories: ICategory[];
}

interface ICategory {
	name: string;
}

interface DispatchProps {
	setActiveCategory: (value: string) => Action;
}

interface StateProps {
	activeCategory: string;
}

type Props = DispatchProps & StateProps;

class Categories extends React.Component<Props, IState> {
	state: IState = {
		categories: []
	};

	componentDidMount() {
		getCategories().then((data) =>
			this.setState({
				categories: data
			})
		);
	}

	public render() {
		const categories = this.state.categories;

		return (
			<StyledCategoryWrapper>
				{categories.map((category, i) => (
					<CategoryItem
						key={i}
						name={category.name}
						onClickHandler={this.props.setActiveCategory}
						isActive={category.name === this.props.activeCategory}
					/>
				))}
			</StyledCategoryWrapper>
		);
	}
}

function mapStateToProps(state: IStore): StateProps {
	return {
		activeCategory: state.activeCategory
	};
}

const mapDispatchToProps: DispatchProps = {
	setActiveCategory
};

const StyledCategoryWrapper = styled.ul`
	padding: 0.5em 0.5em 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style-type: none;
	border-top: 2px solid #fff;
	border-bottom: 2px solid #fff;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
