import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Calendar,Layout } from 'antd';
import RegistrationForm from './RegistrationForm';
import MyHeader from '../../components/MyHeader'
import {connect} from 'react-redux';

const {Content} = Layout;
class RegisterPage extends Component{

    render(){
        return(
            <Layout>
                <MyHeader/>
                <Content style={{marginTop:'64px'}}>
                    <Row>
                        <Col lg={{span:12}}>
                            <Calendar/>
                        </Col>
                        <Col lg={{ span: 12 }}>    
                            <RegistrationForm/>
                        </Col>
                    </Row>
                </Content>

            </Layout> 

        )
    }
}

export default RegisterPage