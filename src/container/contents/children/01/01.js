import React, {Component} from 'react';
import MyMenu from '../../LeftLayout';
import {Form, Icon, Input, Button, Message, Row,Layout,Menu} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class List0101 extends Component{
  render(){
    return(
      <MyMenu keyName={'01'} open={'01'}>
        <Message style={{fontSize:15}}>
          <h1>React 简介</h1>
          <p>React 是 Facebook 在 2013 年开源在 GitHub 上的 JavaScript 库。React 把用户界面抽象成一个 个组件，如按钮组件 Button、对话框组件 Dialog、日期组件 Calendar。开发者通过组合这些组件， 终得到功能丰富、可交互的页面。通过引入 JSX 语法，复用组件变得非常容易，同时也能保证 组件结构清晰。有了组件这层抽象，React 把代码和真实渲染目标隔离开来，除了可以在浏览器 端渲染到 DOM 来开发网页外，还能用于开发原生移动应用。 </p>
          <h2>专注视图层</h2>
          <p>现在的应用已经变得前所未有的复杂，因而开发工具也必须变得越来越强大。和 Angular、 Ember 等框架不同，React 并不是完整的 MVC/MVVM 框架，它专注于提供清晰、简洁的 View （视图）层解决方案。而又与模板引擎不同，React 不仅专注于解决 View 层的问题，又是一个包 括 View 和 Controller 的库。对于复杂的应用，可以根据应用场景自行选择业务层框架，并根据 需要搭配 Flux、Redux、GraphQL/Relay 来使用。 React 不像其他框架那样提供了许多复杂的概念与烦琐的 API，它以 Minimal API Interface 为 目标，只提供组件化相关的非常少量的 API。同时为了保持灵活性，它没有自创一套规则，而是 尽可能地让用户使用原生 JavaScript 进行开发。只要熟悉原生 JavaScript 并了解重要概念后，就 可以很容易上手 React 应用开发。 </p>
        </Message>
      </MyMenu>
    )
  }
}


export default List0101;