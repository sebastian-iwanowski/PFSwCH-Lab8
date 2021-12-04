import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    userInput: 0
  }

  fibonacii(n) {
    const list = [0, 1];
    for (let x = 2; x < n + 1; x +=1) {
      list.push(list[x - 2] + list[x - 1]);
    }
    this.setState({
      userInput: list[n]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
          <label>Fibonacci calculator</label>
        </p>
        <div>
          <input onChange = {e => this.fibonacii(e.target.value)} name="sampleInput" />
        </div>
        <p>
          <label>{this.state.userInput}</label>
        </p>
        </header>
      </div>
    );
  }
}

export default App;
