import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, Redirect, IndexLink} from 'react-router';

import './css/index.css';
import './css/index_scss.scss';
import * as serviceWorker from './serviceWorker';

// 引入单个页面（包括嵌套的子页面）
import myIntroduce from './component/Introduce.js';
import myTable from './component/Table.js';
import myForm from './component/Form.js';
import myProgress from './component/Progress.js';
import myCarousel from './component/Carousel.js';
import Stockhold from './component/Stockhold';
import Fund from './component/Fund';
// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


let routeMap = {
    '/myIntroduce': '0',
    '/myTable': '1',
    '/myForm': '2',
    '/myProgress': '3',
    '/myCarousel': '4'
};

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
    }

    handleClick(e) {
        this.setState({
            current: e.key
        });
    }

    componentWillMount() {
        let route = this.props.location.pathname;
        this.setState({
            current: routeMap[route] || '0'
        });
    }

    componentDidMount() {
        this.setState({
            username: '鲲-2019-05-09'
        });
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src="static/img/logo.jpg" width="30" id="logo"/>
                    <Menu theme="dark"
                          onClick={this.handleClick.bind(this)}
                          style={{ width: 200 }}
                          defaultOpenKeys={['sub1', 'sub2']}
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline"
                    >
                        <Menu.Item key="0"><Link to="/myIntroduce"><Icon type="mail" />股市趣闻</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>主导航</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">股票查询表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">股票购买表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myProgress">个人股票一览</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myProgress2">个人资产一览</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/myCarousel">股市惨案</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Sider}>
            <IndexRoute component={myIntroduce} />
            <Route path="myIntroduce" component={myIntroduce} />
            <Route path="myTable" component={Stockhold} />
            <Route path="myForm" component={myForm} />
            <Route path="myProgress" component={myProgress} />
            <Route path="myProgress2" component={Fund} />
            <Route path="myCarousel" component={myCarousel} />
        </Route>
    </Router>
), document.getElementById('app'));
serviceWorker.unregister();


