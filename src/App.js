import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Routes from './components/Routes'


// const Child = {
//     Gov:Gov,
// }
// const Child = ({ match }) => (
//   <div>
//     <h3>{match.params.id}</h3>
//   </div>
// )

class App extends Component {
    render() {
        return (
            <Router>
                    {/*<Route exact path="/" component={HomePage}/>*/}
                    {/*<Route path="/login" component={LoginPage}/>*/}
                    {/*<Route path="/register" component={RegisterPage}/>*/}
                    {/*<Route path="/contents" component={contents}/>*/}
                    {/*<Route path="/:id" component={Child}/>*/}
                    <Routes/>
            </Router>
        );
    }


}

const mapStateToProps = (state) => {
    const {login} = state;
    return {
        login,
    }
}

//这个操作的功能是是的App能在后面获取到Reducer返回的数据
export default connect(mapStateToProps)(App)
