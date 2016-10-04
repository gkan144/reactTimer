import React    from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

$(document).foundation();
require('style!css!sass!./styles/app.scss');

import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown}/>
    <IndexRoute component={Timer}/>
  </Route>
</Router>, document.getElementById('app'));