import {
    Form, Icon, Input, Button, Checkbox, message, Spin, Row, Col
} from 'antd';
import React, { Component } from 'react';
import '../css/NormalLoginForm.less';
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
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
                
                setTimeout(() => { 
                    this.props.history.push({pathname:'/app', state: values});
                }, 2000);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row type="flex" justify="center">
                    <p className="login-space">        </p>
                </Row>
                <Row type="flex" justify="center">
                    <h1 className="login-space">Welcome to Stock Trade System </h1>
                </Row>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Row type="flex" justify="center">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" style={{width: '400px'}}/>
                    )}
                </Form.Item>
            </Row>
            <Row type="flex" justify="center">
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
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
                   Log in
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
