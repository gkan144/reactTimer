import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';

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

  render() {
    return <div>
      <Clock totalSeconds={this.state.count}/>
      <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
    </div>
  }
}

export default Countdown;