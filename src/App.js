import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { fetchItemsIfNeeded } from './Actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchItemsIfNeeded());
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return state;
}

export default connect(mapStateToProps)(App);
