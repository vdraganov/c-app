import * as React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import '../App.css';

import logo from '../assets/logo.svg';

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

	public render() {
		return (
			<StyledAppHeader className={this.state.isShrinked ? 'shrink' : ''}>
				<img className="App-logo" src={logo} alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</StyledAppHeader>
		);
	}
}

const StyledAppHeader = styled.header`
	background-color: #222;
	height: 150px;
	padding: 20px;
	color: white;
	transition: all 0.4s ease-in-out;

	.App-title {
		font-size: 1.5em;
	}

	.App-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 80px;
	}

	&.shrink {
		display: flex;
		align-items: center;
		text-align: left;
		height: 60px;
		transition: all 0.4s ease-out;

		> .App-logo {
			height: 30px;
		}
	}
`;

export default AppHeader;
