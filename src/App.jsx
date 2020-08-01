import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>Countdown to December 25, 2020</div>
        <div>
          <div>14 days</div>
          <div>30 hours</div>
          <div>15 minutes</div>
          <div>20 seconds</div>
        </div>
        <input placeholder="new date" />
        <button>Submit</button>
      </div>
    )
  }
}

export default App;
