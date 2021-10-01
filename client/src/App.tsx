import Builder from 'components/Builder';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import store from 'store';

// TODO: Add container with better margins
export default () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to='/builder'>Builder</Link>
        </li>
      </ul>

      <Switch>
        <Route path='/builder'>
          <Builder />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
