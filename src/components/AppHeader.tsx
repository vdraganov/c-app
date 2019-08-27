import * as React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import '../App.css';

import logo from '../assets/logo.svg';
import bi from '../assets/studiostoks160300045.jpg';

class AppHeader extends React.Component {
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

	onClickHandler() {
		console.log('Btn works!');
	}

	public render() {
		return (
			<StyledAppHeader className={this.state.isShrinked ? 'shrink' : ''}>
				<div className="header-wrapper">
					<img className="App-logo" src={logo} alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<button onClick={this.onClickHandler}>Pick Something For Me</button>
				</div>
			</StyledAppHeader>
		);
	}
}

const StyledAppHeader = styled.header`
	height: 200px;
	padding: 20px;
	color: white;
	transition: all 0.4s ease-in-out;
	background-image: url(${bi});
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
		text-align: left;
		height: 60px;
		padding: 0;
		background-image: none;
		transition: all 0.4s ease-out;

		> .header-wrapper {
			display: flex;
			align-items: center;
			margin: 0 auto 0 1em;
		}

		.App-logo {
			height: 30px;
		}
	}
`;

export default AppHeader;
