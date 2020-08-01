import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2020',
      newDeadline: ''
    }
  }

  changeDeadline() {
    //input DOM element
    this.setState({deadline: this.state.newDeadline});
    let inputBox = document.getElementById('inputBox');
    inputBox.value = '';
  }

  render() {
    return (

      <div className="App">

        <div className="App-title">Countdown to {this.state.deadline}</div>

        <Clock deadline={this.state.deadline} />

        <div>
          <input placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})} id="inputBox" />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>

      </div>
    )
  }
}

export default App;
