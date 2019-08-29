import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import SearchField from './SearchField';

import { fetchRandomDrink, Action } from '../store/actions/drinksAction';

import '../App.css';

import logo from '../assets/logo.svg';
import backImg from '../assets/studiostoks160300045.jpg';

interface DispatchProps {
	fetchRandomDrink: () => Action;
}

class AppHeader extends React.Component<DispatchProps> {
	maxOffsetFromTop = 50;
	wait = 200;
	state = {
		isShrinked: false
	};

	onScroll = throttle(() => {
		if (window.scrollY > this.maxOffsetFromTop) {
			this.setState({ isShrinked: true });
			this.removeScrollListener();
		}
	}, this.wait);

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		this.removeScrollListener();
	}

	removeScrollListener() {
		window.removeEventListener('scroll', this.onScroll);
	}

	public render() {
		const headerShrinkClass = this.state.isShrinked ? 'shrink' : '';

		return (
			<StyledAppHeader className={headerShrinkClass}>
				<div className="header-wrapper">
					<div className="shrink-left-container">
						<img className="App-logo" src={logo} alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</div>
					<div className="shrink-right-container">
						<SearchField className={headerShrinkClass} />
						<button onClick={this.props.fetchRandomDrink}>Pick Something For Me</button>
					</div>
				</div>
			</StyledAppHeader>
		);
	}
}

const StyledAppHeader = styled.header`
	height: 220px;
	padding: 20px;
	color: white;
	transition: all 0.4s ease-in-out;
	background-image: url(${backImg});
	background-repeat: no-repeat;
	background-color: #ff811a;

	.header-wrapper {
		width: 50%;
		margin: auto 0 auto auto;
	}

	.App-title {
		font-size: 1.5em;
	}

	.App-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 80px;
	}

	button {
		background-color: #ff811a;
		color: #fff;
		padding: 10px;
		margin: 5px;
		border-width: 1px;
		border-style: solid;
		border-color: #ff0;
		border-radius: 0.5em;
		font-weight: 800;
		white-space: nowrap;

		&:hover {
			cursor: pointer;
			transform: scale(1.07);
			background-color: #ff0;
			color: #222;
		}
	}

	&.shrink {
		height: 60px;
		padding: 0;
		background-image: none;
		transition: all 0.4s ease-out;

		.App-logo {
			height: 30px;
			align-self: center;
		}

		.App-title {
			font-size: 1em;
		}

		> .header-wrapper {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.shrink-left-container,
		.shrink-right-container {
			display: flex;
			margin: 0 10px;
		}

		.shrink-left-container > * {
			display: inline-block;
		}
	}
`;

const mapDispatchToProps: DispatchProps = {
	fetchRandomDrink
};

export default connect(null, mapDispatchToProps)(AppHeader);
