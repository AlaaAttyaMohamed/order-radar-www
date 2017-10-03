import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
          count: 0,
          first: 0,
          second: 0,
          total: 0
      };
  }

  handleClick() {
      this.setState({
          total: parseInt(this.state.first) + parseInt(this.state.second)
      })
  }

  setFirst(event) {
    this.setState({
        first: event.target.value
    });
  }

  setSecond(event) {
      this.setState({
          second: event.target.value
      });
  }

  render() {
    return (
      <div>
          <input type="text" value={this.state.first} onChange={this.setFirst.bind(this)} />
          <input type="text" value={this.state.second} onChange={this.setSecond.bind(this)} />
        <div>{this.state.total}</div>
        <button onClick={this.handleClick.bind(this)}>click me</button>
      </div>
    );
  }
}

export default App;
