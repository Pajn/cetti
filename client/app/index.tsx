/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

// Temporary disable lint warning here. Waiting for tslint 2.5.2...

import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import { getBuilds } from './travis-builds';

import { Main } from './components/main';
import { Dashboard } from './components/dashboard';
import { ActivityDetail } from './components/activity-detail';

window['React'] = React;

require('./style/mdl.global.scss');
require('react-mdl/extra/material.js');

render(
  (
    <Router>
      <Route path='/' component={Main}>
        <Route path='stream/:id' component={ActivityDetail} />
        <Route path=':id' component={Dashboard} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);

getBuilds();