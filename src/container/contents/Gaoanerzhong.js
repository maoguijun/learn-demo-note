import React, {Component} from 'react';
import MyMenu from './LeftLayout';
import {Form, Icon, Input, Button, message, Row,Layout,Menu} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Gaoanerzhong extends Component{
  render(){
    return(
      <MyMenu keyName={'Gaoanerzhong'} open={'education'}>
        <div>高安二中</div>
      </MyMenu>
    )
  }
}


export default Gaoanerzhong;