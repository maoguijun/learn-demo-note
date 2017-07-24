import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Row,Layout} from 'antd';
import {login} from '../../actions/login';
import {connect} from 'react-redux';
import MyHeader from '../../components/MyHeader'
import './LoginPage.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const FormItem = Form.Item;
const {Header, Content,} = Layout;

class LoginPage extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Layout>
        <MyHeader/>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{
          marginTop: '64px'
        }}>
          <FormItem>
            {getFieldDecorator('username', {
              initialValue:'1@test.com',
              rules: [
                {
                  require: true,
                  message: '请输入用户名！'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "user" style = {{fontSize: 13}}/>}
                placeholder="用户名"/>

            )
  }
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              initialValue:'111111',
              rules: [
                {
                  require: true,
                  message: '请输入密码！'
                }
              ]
            })(
              <Input
                prefix={< Icon type = "lock" style = {{fontSize: 13}}/>}
                type="password"
                placeholder="密码"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
            <Link to='/register'>
              注册
            </Link>
          </FormItem>
        </Form>
      </Layout>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, values) => {
        if (!err) {
          let json = Object.assign(values, {type: '1'});
          console.log(json);
          const {dispatch} = this.props;
          dispatch(login(json)).then(result => {
            if (result.result) {
              message.info('登陆成功');
              window.location.href = "/0101";
            }
          })
        }
      });
  }
}

    

const mapStateToProps = (state) => {
    const {login} = state;
    return {
        login,
    }
}
const WrappedNormalLoginForm = Form.create()(LoginPage);
export default connect(mapStateToProps)(WrappedNormalLoginForm)
