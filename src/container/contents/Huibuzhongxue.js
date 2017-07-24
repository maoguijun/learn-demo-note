import React, {Component} from 'react';
import MyMenu from './LeftLayout';
import {Form, Icon, Input, Button, message, Row,Layout,Menu} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Huibuzhongxue extends Component{
  render(){
    return(
      <MyMenu keyName={'Huibuzhongxue'} open={'education'}>
        <div>灰埠中学</div>
      </MyMenu>
    )
  }
}


export default Huibuzhongxue;