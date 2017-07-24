import React, {Component} from 'react';
import {
    Menu,
    Icon,
    Layout,
    Breadcrumb,
    Carousel,
    Row,
    Col,
    Button
} from 'antd';
import {isEmptyObject} from '../utils/CommonUtil';
import {getHomeAds} from '../actions/home';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MyHeader from '../components/MyHeader';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content} = Layout;

class HomePage extends Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(getHomeAds());
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({current: e.key});
    }

    render() {
        const {homeAds} = this.props;
        console.log(homeAds);
        return (
            <Layout style={{
                overflow: 'hidden'
            }}>
                <MyHeader/>
                <Content style={{
                    marginTop: 64
                }}>
                    {!isEmptyObject(homeAds) && <Carousel
                        autoplay
                        effect="fade"
                        style={{
                        overflow: 'hidden'
                    }}>
                        {homeAds
                            .results
                            .map((item, i) => {
                                return (
                                    <div key={i}>
                                        <img alt="example" height="500px" width="100%" src={item.imgurl}/>
                                    </div>
                                )
                            })
}
                    </Carousel>
}
                </Content>

            </Layout>
        );
    }

}

const mapStateToProps = (state) => {
    const {home} = state;
    return {homeAds: home.homeAds}
}
export default connect(mapStateToProps)(HomePage)
