import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
};
