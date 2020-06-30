import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

export default function Routes() {
  return ( <
    BrowserRouter >
    <
    Switch >
    <
    Route path = "/"
    exact component = {
      HomePage
    }
    /> <
    Route path = "/users"
    component = {
      UsersPage
    }
    /> <
    /Switch> <
    /BrowserRouter>
  );
}