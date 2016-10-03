import React from 'react';

class CountdownForm extends React.Component {

  onSubmit(event){
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if(/^[0-9]*$/.test(strSeconds)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return <div>
      <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
        <input type="text" ref="seconds" placeholder="Enter time in seconds" />
        <button className="button expanded">Start</button>
      </form>
    </div>;
  }
}

CountdownForm.PropTypes = {
  onSetCountdown: React.PropTypes.func.isRequired
};

export default CountdownForm;