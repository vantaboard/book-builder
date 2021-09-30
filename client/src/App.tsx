import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Builder from 'components/Builder';

// TODO: Add container with better margins
const App = () => (
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

export default App;
