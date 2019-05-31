import React from 'react'

// introduce
export default class Introduce extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="ani-box">
				<h2>欢迎来到股票交易系统客户端</h2>
				<br/>
				点击右侧主导航栏，您可以进行如下操作：
				<br/>
				·查询股票 &nbsp;&nbsp; ·购买股票 &nbsp;&nbsp; ·出售股票
				<br/>
				·浏览个人股票信息 &nbsp;&nbsp; ·浏览个人资产信息
				<br/>
				·浏览交易历史
				<br/>
				<br/>
				点击右上角图标，您可选择退出登陆或修改密码
            </div>
        )
    }
}
