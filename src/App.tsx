import * as React from 'react';

import AppHeader from './components/AppHeader';
import Categories from './components/Categories';
import Main from './components/Main';
// @todo remove the css and use the main
import './App.css';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<AppHeader />
				<Categories />
				<Main />
			</div>
		);
	}
}

export default App;
