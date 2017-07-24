import React, {Component} from 'react';
import MyMenu from '../../LeftLayout';
import {Form, Icon, Input, Button, Message, Row,Layout,Menu, Col} from 'antd';
import "../constant.scss";
const { Header, Content, Footer, Sider } = Layout;
class List0101 extends Component{
  render(){
    return(
      <MyMenu keyName={'01'} open={'01'}>
        <div style={{fontSize:15,margin:"0 auto", width:"90%"}} className="contants">
          <h1 className="title">
            1.1 React 简介
          </h1>
          <p>
            React 是 Facebook 在 2013 年开源在 GitHub 上的 JavaScript 库。React 把用户界面抽象成一个 个组件，如按钮组件 Button、对话框组件 Dialog、日期组件 Calendar。开发者通过组合这些组件， 终得到功能丰富、可交互的页面。通过引入 JSX 语法，复用组件变得非常容易，同时也能保证 组件结构清晰。有了组件这层抽象，React 把代码和真实渲染目标隔离开来，除了可以在浏览器 端渲染到 DOM 来开发网页外，还能用于开发原生移动应用。 
          </p>
          <div>
            <h2>
              1.1.1 专注视图层
            </h2>
            <p>
              现在的应用已经变得前所未有的复杂，因而开发工具也必须变得越来越强大。和 Angular、 Ember 等框架不同，React 并不是完整的 MVC/MVVM 框架，它专注于提供清晰、简洁的 View （视图）层解决方案。而又与模板引擎不同，React 不仅专注于解决 View 层的问题，又是一个包 括 View 和 Controller 的库。对于复杂的应用，可以根据应用场景自行选择业务层框架，并根据 需要搭配 Flux、Redux、GraphQL/Relay 来使用。 React 不像其他框架那样提供了许多复杂的概念与烦琐的 API，它以 Minimal API Interface 为 目标，只提供组件化相关的非常少量的 API。同时为了保持灵活性，它没有自创一套规则，而是 尽可能地让用户使用原生 JavaScript 进行开发。只要熟悉原生 JavaScript 并了解重要概念后，就 可以很容易上手 React 应用开发。 

            </p>
          </div>
          {/* `````` */}
          <div>
            <h2>
              1.1.2 Virtual DOM 
            </h2>
            <div>
              <p>
                真实页面对应一个 DOM 树。在传统页面的开发模式中，每次需要更新页面时，都要手动操作 DOM 来进行更新，如图 1-1 所示。
              </p>
              <div className="pic">
                <img src="" alt=""/>
                <p>图 1-1 传统 DOM 更新</p>
              </div>
              <p>
                DOM 操作非常昂贵。我们都知道在前端开发中，性能消耗最大的就是 DOM 操作，而且这部分代码会让整体项目的代码变得难以维护。React 把真实 DOM 树转换成 JavaScript 对象树，也就是 Virtual DOM，如图 1-2 所示。
              </p>
              <div>
                <img src="" alt=""/>
                <p>图 1-2 React DOM 更新</p>
              </div>
              <p>
                每次数据更新后，重新计算 Virtual DOM，并和上一次生成的 Virtual DOM 做对比，对发生
                变化的部分做批量更新。React 也提供了直观的 shouldComponentUpdate 生命周期回调，来减少数
                据变化后不必要的 Virtual DOM 对比过程，以保证性能。
                我们说 Virtual DOM 提升了 React 的性能，但这并不是 React 的唯一亮点。此外，Virtual DOM
                的渲染方式也比传统 DOM 操作好一些，但并不明显，因为对比 DOM 节点也是需要计算资源的。
                它最大的好处其实还在于方便和其他平台集成，比如 react-native 是基于 Virtual DOM 渲染出
                原生控件，因为 React 组件可以映射为对应的原生控件。在输出的时候，是输出 Web DOM，还
                是 Android 控件，还是 iOS 控件，就由平台本身决定了。因此，react-native 有一个口号——Learn
                Once，Write Anywhere。
              </p>
            </div>
          </div>

          <div>
            <h2>
              1.1.3 函数式编程
            </h2>
            <div>
              <p>
                在过去，工业界的编程方式一直以命令式编程为主。命令式编程解决的是做什么的问题，比如图灵机，而现代计算机就是一个经历了多次进化的高级图灵机。如果说人脑最擅长的是分析问题，那么电脑最擅长的就是执行指令，电脑只需要几条汇编指令就可以轻松算出我们需要很长时间才能解出的运算。命令式编程就像是在给电脑下命令，现在主要的编程语言（包括 C 和 Java 等）都是由命令式编程构建起来的。
              </p>
              <div className="pic">
                <img src="" alt=""/>
                <p>图 1-1 传统 DOM 更新</p>
              </div>
              <p>
                而函数式编程，对应的是声明式编程，它是人类模仿自己逻辑思考方式发明出来的。声明式编程的本质是 lambda 演算①。试想当我们操作数组的每个元素并返回一个新数组时，如果是计算机的思考方式，则是需要一个新数组，然后遍历原数组，并计算赋值；如果是人的思考方式，则是构建一个规则，这个过程就变成构建一个 f 函数作用在数组上，然后返回新数组。这样，计算可以被重复利用。
              </p>
              <div>
                <img src="" alt=""/>
                <p>图 1-2 React DOM 更新</p>
              </div>
              <p>
                当回到 UI 界面上，我们的产品经理又想出了一个新点子时，我们是抱怨呢，还是去思考怎么解决这个问题。React 把过去不断重复构建 UI 的过程抽象成了组件，且在给定参数的情况下约定渲染对应的 UI 界面。React 能充分利用很多函数式方法去减少冗余代码。此外，由于它本身就是简单函数，所以易于测试。可以说，函数式编程才是 React 的精髓。
              </p>
            </div>
          </div>

        </div>
      </MyMenu>
    )
  }
}


export default List0101;