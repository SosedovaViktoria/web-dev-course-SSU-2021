import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../../containers/App';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      {/* 404 Page */}
      <Route component={App} />
    </Switch>
  </main>
);

export default Main;
