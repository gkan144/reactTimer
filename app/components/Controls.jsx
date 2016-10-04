import React from 'react';

class Controls extends React.Component {

  render() {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      }else if(countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return <div className="controls">
      {renderStartStopButton()}
      <button className="button alert hollow">Clear</button>
    </div>
  }
}

Controls.PropTypes = {
  countdownStatus: React.PropTypes.string.isRequired
};

export default Controls;