import {
    Form, Icon, Input, Button, Checkbox, message, Spin, Row, Col
} from 'antd';
import React, { Component } from 'react';
import '../css/NormalLoginForm.less';
import axios from 'axios'
import { userInfo } from 'os';
import {api} from '../json/config.json'
//import welcome_svg from logo.svg

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
		this.props.form.validateFields((err, values) => {
            
            const data = new URLSearchParams();
            Object.keys(values).forEach(key=>{
                data.append(key, values[key]);
            })
            fetch(api + '/account_login', {
                body: data,
                method: "POST",
                credentials: 'include',
                mode: "cors"
            })
            .then(res=>res.json())
            .then(json=>{
                if (json.status === 0){
                    console.log('values from Form: ', values);
                    localStorage.setItem('userinfo', JSON.stringify(values));
                    message.success('成功登陆');
                    setTimeout(() => {
                        this.props.history.push({pathname:'/app', state: values});
                    }, 2000);
                }
                else{
                    message.error('密码有误');
                }
            })
            .catch(err=>{
                message.error('输入信息不足！');
            })
            
            
			// let test_password = '1'
            // if (!err) {
			// 	console.log('values from Form: ', values);
			// 	localStorage.setItem('userinfo', JSON.stringify(values));
			// 	message.success('成功登陆');
			// 	setTimeout(() => {
			// 		this.props.history.push({pathname:'/app', state: values});
			// 	}, 2000);
				/*axios.post('/api/login', {
					ID: values.username
				})
					.then((reponse) => {
						if(values.password == reponse.data.password) {
							localStorage.setItem('userinfo', JSON.stringify(values));
							message.success('成功登陆');
							setTimeout(() => {
								this.props.history.push({pathname:'/app', state: values}); 
							}, 2000);
						}
						else {
							message.error('密码有误');
						}
					})
					*/   
			// }
			// else {
			// 	message.error('输入信息不足！');
			// }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <br />
                <Row type="flex" justify="center">
                    <img src="static/img/logo.png" width="100" height="100"/>
                </Row>
                <br />
                <Row type="flex" justify="center">
                    <h1 className="login-space">欢迎来到股票交易客户端</h1>
                </Row>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Row type="flex" justify="center">
                <Form.Item label="用户名">
                    {getFieldDecorator('user_id', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" style={{width: '400px'}}/>
                    )}
                </Form.Item>
            </Row>
            <Row type="flex" justify="center">
                <Form.Item label="密码">
                    {getFieldDecorator('login_pwd', {
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" style={{width: '400px'}}/>
                    )}
                </Form.Item>
             </Row>
             <Row type="flex" justify="center">
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                </Form.Item>
            </Row>
            <Row type="flex" justify="center">
             <Form.Item>
               <Button type="primary" htmlType="submit" style={{width: '150px'}} className="login-form-button">
                   登陆
               </Button>
             </Form.Item>
            </Row>
        </Form>
        </div>
        );
    }
}
const WrappedLogin = Form.create()(NormalLoginForm)
export default WrappedLogin;
