import React from 'react';
import { Link } from 'react-router-dom';

import '../css/index.css';
import '../css/index_scss.scss';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

let routeMap = {
    '/introduce': '0',
    '/querystock': '1',
    '/buysellform': '2',
    '/stockhold': '3',
    '/fund': '4',
    '/carousel': '5',
    '/password': '6',
    '/history': 7
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

    // componentWillMount() {
    //     let route = this.props.history.pathname;
    //     this.setState({
    //         current: routeMap[route] || '0'
    //     });
    // }

    // componentDidMount() {
    //     this.setState({
    //         username: '鲲-2019-05-09'
    //     });
    // }

    render() {
        return (
            <div id="leftMenu">
                <img src="static/img/logo.png" width="30" id="logo"/>
                <Menu theme="dark"
                        onClick={this.handleClick.bind(this)}
                        style={{ width: 200 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                >
                    <Menu.Item key="0"><Link to="/app/introduce"><Icon type="mail" />股市趣闻</Link></Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="bars" /><span>主导航</span></span>}>
                        <Menu.Item key="1"><Link to="/app/querystock">股票查询表单</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/app/buysellform">股票购买表单</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/app/stockhold">个人股票一览</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/app/fund">个人资产一览</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/app/carusel">股市惨案</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/app/password">修改密码</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/app/history">交易历史</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Sider;
