import App from './app/App.react';
import Detail from './ticket/Detail';
import Index from './ticket/Index';
import NotFound from './notfound/Page.react';
import React from 'react';
import Search from './ticket/Search';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Index} />
      <Route component={Search} path="search" />
      <Route component={Detail} path="detail/:idEvent" />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
