import React    from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!./styles/app.scss');

import Main from './components/Main';

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={Main}>
  </Route>
</Router>, document.getElementById('app'));