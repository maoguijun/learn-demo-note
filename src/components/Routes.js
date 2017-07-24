import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

import LoginPage from '../container/account/LoginPage';
import RegisterPage from '../container/RegisterPage';
import HomePage from '../container/HomePage';
import LeftLayout from '../container/contents/LeftLayout';
import item01 from "../container/contents/children/01";


const children = [
  // {path:'/',Com:HomePage},
  // {path:'/login',Com:LoginPage},
  // {path:'/register',Com:RegisterPage},
  {path:'/0101',Com:item01[0]},
  {path:'/0102',Com:item01[1]},



];
//exact 表示精确匹配
const Routes=()=>(
  <div>
    <Route exact path="/" exact component={HomePage} key='home'></Route>
    <Route exact path="/login" component={LoginPage} key='login'></Route>
    <Route exact path="/register" component={RegisterPage} key='register'></Route>
    {children.map(t=><PrivateRoute path={t.path} component={t.Com} key={t.path.slice(1)}></PrivateRoute >)}

  </div>
)
export default Routes;