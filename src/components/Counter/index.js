import React, { Component } from 'react';
import Display from './Display';
import Amount from './Amount';
import Buttons from './Buttons';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.amount || 1,
      value: this.props.value || 0,
    };
  }

  increment = () => {
    let incValue = this.state.value;  
    incValue += this.state.amount;

    this.setState({
      value: incValue,
    });
  };

  decrement = () => {
    let decValue = this.state.value;  
    decValue -= this.state.amount;

    this.setState({
      value: decValue,
    });
  };

  handleAmount = (value) => {
    this.setState({
      amount: value,
    });
  };

  render() {
    return (
      <div>
        <Amount
          handleAmount={this.handleAmount}
          amount={this.state.amount}
        ></Amount>
        <Display value={this.state.value}></Display>
        <Buttons
          onIncrement={this.increment}
          onDecrement={this.decrement}
        ></Buttons>
      </div>
    );
  }
}
