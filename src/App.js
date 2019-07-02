import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculate, deleteLastEntry, clear, evaluateExpression } from './redux/actions/calculate';
import Caculator from './components/calculator';
import * as fromCalculator from './redux';
import './App.css';

export class App extends Component {

  componentDidMount () {
    console.log('mounted calculator!');
  }

  render() {
    return (
      <div className='calculator--container'>
        <Caculator.Screen { ...this.props} />
        <Caculator.Keypad { ...this.props} />
        <Caculator.History { ...this.props} />
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
    delete: () => {
      dispatch(deleteLastEntry())
    },
    clear: () => {
      dispatch(clear())
    },
    evaluate: () => {
      dispatch(evaluateExpression())
    },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(App);