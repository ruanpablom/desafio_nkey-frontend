import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { JobOps, Details, Add } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={JobOps} />
      <Route path="/details" exact component={Details} />
      <Route path="/add" exact component={Add} />
    </Switch>
  );
}
