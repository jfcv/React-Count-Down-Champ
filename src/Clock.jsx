import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('this.props', this.props);
  }

  //react hook
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    //time gives back the number of ms between the two dates
    const time = Date.parse(deadline) - Date.parse(new Date());
    //console.log('time', time);

    //conversions
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/(1000*60)) % 60);
    const hours = Math.floor((time/(1000*60*60)) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    //console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);

    //updating the state
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.state.days} days </div>
        <div className="Clock-hours">{this.state.hours} hours </div>
        <div className="Clock-minutes">{this.state.minutes} minutes </div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    )
  }
}

export  default Clock;
