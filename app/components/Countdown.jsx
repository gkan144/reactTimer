import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count > 0?--this.state.count:0})
    }, 1000);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }

  renderControlArea() {
    var {countdownStatus} = this.state;
    if(countdownStatus !== 'stopped') {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />;
    } else {
      return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>;
    }
  }

  render() {
    return <div>
      <Clock totalSeconds={this.state.count}/>
      {this.renderControlArea()}
    </div>
  }
}

export default Countdown;