import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './Pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};
