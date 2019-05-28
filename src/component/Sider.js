import React from 'react';
import { Link } from 'react-router-dom';

import '../css/index.css';
import '../css/index_scss.scss';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

let routeMap = {
    '/introduce': '0',
    '/table': '1',
    '/form': '2',
    '/progress': '3',
    '/progress2': '4',
    '/carousel': '5'
};

class Sider extends React.Component {
    constructor(props) {
        super(props);
        let { username } = props;
        this.state = {
            current: '',
            username: username
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
                        <Menu.Item key="0"><Link to="/introduce"><Icon type="mail" />股市趣闻</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>主导航</span></span>}>
                            <Menu.Item key="1"><Link to="/table">股票查询表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/form">股票购买表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/progress">个人股票一览</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/progress2">个人资产一览</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/carousel">股市惨案</Link></Menu.Item>
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

export default Sider;