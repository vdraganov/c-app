import * as React from 'react';
import '../App.css';

import { getDrinksByCategory } from '../services/filter/filterServiceCopy';

import logo from '../assets/logo.svg';

class AppHeader extends React.Component {
	public render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				<button onClick={(e) => getDrinksByCategory('Cocoa')}> Test Axios get mock</button>
			</header>
		);
	}
}

export default AppHeader;
