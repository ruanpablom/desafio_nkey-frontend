import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { JobOps, Details } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={JobOps} />
      <Route path="/details" exact component={Details} />
    </Switch>
  );
}
