import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

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

        <Form inline>
          <FormControl className="Deadline-input" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})} id="inputBox" />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>

      </div>
    )
  }
}

export default App;
