import Builder from 'components/Builder';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
