import React, {Component} from 'react';
import MyMenu from './LeftLayout';
import {Form, Icon, Input, Button, message, Row,Layout,Menu} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Gaoanzhongxue extends Component{
  render(){
    return(
      <MyMenu keyName={'Gaoanzhongxue'} open={'education'}>
        <div>高安中学</div>
      </MyMenu>
    )
  }
}


export default Gaoanzhongxue;