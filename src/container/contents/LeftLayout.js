import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Row,Layout,Menu,Breadcrumb} from 'antd';
import {connect} from 'react-redux';
import './LeftLayout.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import menuList from "./menuList";

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu,Item} =Menu;

class MyMenu extends Component{
  state = {
    collapsed: false,
    mode:"inline",
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      // mode:this.refs.menu=="inline"?"horizontal":"inline",
    });
  }
  handleSlect(e) {
    console.log(e)
  }
  render(){
    console.log(typeof (this.props.keyName), this.props.keyName);
    console.log(typeof (this.props.open), this.props.open);
    console.log(menuList);
    return(
      <Layout style={{ height: '100vh' }}>
        <Sider style={{ overflow: 'auto' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">React</div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[this.props.keyName]}
            mode={this.state.mode}
            defaultOpenKeys={[this.props.open]}
          ref = "menu">
            {menuList.map(submenu => { 
              if (submenu.id < 9) {
                return (
                  < SubMenu
                    defaultCollapsed={this.props.open}
                   
                    key={submenu.id}
                    title={<span>{submenu.title}</span>}
                  >
                    {submenu.items.map(item =>
                      <Item key={submenu.id + item.id}>
                        <Link to={"/" + submenu.id + item.id} onClick={e=>this.handleSlect(e)}>
                          {item.label}
                        </Link>
                      </Item>
                    )}
                  </SubMenu>
                )
              } else { 
                return (
                  <Item key={ submenu.id}>
                    <Link to={"/"  + submenu.id}>
                      {submenu.label}
                    </Link>
                  </Item>
                )
              }
            }
            )}
          </Menu>
         </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: "8px 24px" }} >
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
          </Header>

          <Content style={{ margin: '24px 16px 0', overflow: 'auto' ,backgroundColor:"#E3E040"}}>

           {this.props.children}

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            react-demo-note ©2017 Created by Maoguijun
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default MyMenu;