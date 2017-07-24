import React, {Component} from 'react';
import {Menu, Icon, Layout, Breadcrumb, Carousel, Row, Col, Button} from 'antd';
import {isEmptyObject} from '../util/CommonUtil';
import {getHomeAds} from '../actions/home';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content,} = Layout;
 
class MyHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            current:'home',
        }
    }
    render(){
        return(
            <Header style={{position: 'fixed', width: '100%', backgroundColor: 'white',zIndex:'2'}}>
                    
                <Row>
                    <Col lg={{span:18}}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{lineHeight: '62px', width: '100%'}}>

                            <Menu.Item key="home">
                                <Link to='/'>
                                    <Icon type="home"/>首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="appstore"/>产品
                            </Menu.Item>
                            <SubMenu title={<span><Icon type="setting"/>解决方案</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="service">
                                <Icon type="appstore"/>服务支持
                            </Menu.Item>
                            <Menu.Item key="alipay">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">关于我们</a>
                            </Menu.Item>
                        </Menu>
                    
                    </Col>
                    <Col lg={{span:6}}>
                        <Button.Group>
                            <Button key='login'>
                                <Link to='/login'>
                                    <Icon type="login" /> 登入
                                </Link>
                            </Button>
                            <Button key='register'>
                                <Link to='/register'>
                                <Icon type="meh-o" />
                                注册</Link>
                            </Button>

                        </Button.Group>

                    </Col>
                </Row> 
            </Header>
        )
    }

}

export default MyHeader;
 