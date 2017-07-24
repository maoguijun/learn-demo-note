import React, {Component} from 'react';
import MyMenu from './LeftLayout';
import {Form, Icon, Input, Button, message, Row,Layout,Menu} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Shinaozhongxue extends Component{
  render(){
    return(
      <MyMenu keyName={'Shinaozhongxue'} open={'education'}>
        <div>石脑中学</div>
      </MyMenu>
    )
  }
}


export default Shinaozhongxue;