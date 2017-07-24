import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import {fakeAuth} from '../actions/login';
const {isAuthenticated} =fakeAuth;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;