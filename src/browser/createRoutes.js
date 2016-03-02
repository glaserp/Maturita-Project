import App from './app/App.react';
import Auth from './auth/Page.react';
import Detail from './ticket/Detail';
import Firebase from './firebase/Page.react';
import Index from './ticket/Index';
import Me from './me/Page.react';
import NotFound from './notfound/Page.react';
import Order from './ticket/components/Order/Order'
import Profile from './me/Profile.react';
import React from 'react';
import Search from './ticket/Search';
import Settings from './me/Settings.react';
import Todos from './todos/Page.react';
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
      <Route component={Auth} path="login" />
      <Route component={Firebase} path="firebase" />
      <Route component={Me} onEnter={requireAuth} path="me">
        <Route component={Profile} path="profile" />
        <Route component={Settings} path="settings" />
      </Route>
      <Route component={Search} path="search" />
      <Route component={Detail} path="detail">
        <Route component={Order} path="order" />
      </Route>
      <Route component={Todos} path="todos" />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
