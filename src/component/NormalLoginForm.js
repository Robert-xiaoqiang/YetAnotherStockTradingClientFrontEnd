import {
    Form, Icon, Input, Button, Checkbox, message, Spin
} from 'antd';
import React, { Component } from 'react';
import '../css/NormalLoginForm.less';
class NormalLoginForm extends React.Component {
    constructor(props) {
        this.state = {
            isLoading: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('values from Form: ', values);
                this.setState({
                    isLoding: true,
                });
                /**
                 * AXIO query username
                 * TODO
                 */
                localStorage.setItem('userinfo', JSON.stringify(values));
                message.success('login successed!'); //成功信息
                let that = this;
                setTimeout(function() { //延迟进入
                    that.props.history.push({pathname:'/', state: values});
                }, 2000);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.state.isLoding? <Spin size="large" className="loading" /> :
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

export default NormalLoginForm;