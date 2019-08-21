import * as React from 'react';
import '../App.css';

import logo from '../assets/logo.svg';

class AppHeader extends React.Component {
  public render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}

export default AppHeader;
 