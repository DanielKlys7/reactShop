import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'modules/auth/components/Login';
import { Products } from 'modules/products/Products';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Switch>
    <Route path={AppRoute.home} exact component={Products} />
    <Route path={AppRoute.login} component={Login} />

    <Redirect to={AppRoute.home} />
  </Switch>
);
