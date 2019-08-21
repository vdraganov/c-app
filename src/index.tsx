import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import App from './App';

const Root: React.FunctionComponent = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

window.addEventListener('DOMContentLoaded', () => {
	const rootEl = document.getElementById('root');
	ReactDOM.render(<Root />, rootEl);
});
