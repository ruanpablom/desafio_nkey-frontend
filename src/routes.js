import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { JobOps, Details, AddOrUpdate } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={JobOps} />
      <Route path="/details" exact component={Details} />
      <Route path="/add" exact component={AddOrUpdate} />
      <Route path="/update" exact component={AddOrUpdate} />
    </Switch>
  );
}
