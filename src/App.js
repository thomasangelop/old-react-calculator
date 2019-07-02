import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate } from './redux/actions/calculate';
import Caculator from './components/calculator';
import * as fromCalculator from './redux';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className='calculator--container'>
        <Caculator.Screen { ...this.props} />
        <Caculator.Keypad { ...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(App);