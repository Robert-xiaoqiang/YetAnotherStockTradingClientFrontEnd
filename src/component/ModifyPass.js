import {
    Form, Icon, Input, Button, Checkbox, message, Spin, Row, Col
} from 'antd';
import React, { Component } from 'react';

class ModifyPassForm extends React.Component {
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
                message.success('password changed!'); //成功信息
           }    
        });
     }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <br />
                <br />
                <Row type="flex" justify="center">
                    <h3 className="login-space">Please input your old password and new password</h3>
                </Row>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Row type="flex" justify="center">
                <Form.Item>
                    {getFieldDecorator('old_password', {
                        rules: [{ required: true, message: 'Please input your old password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="old password" style={{width: '400px'}} type="password"/>
                    )}
                </Form.Item>
            </Row>
            <Row type="flex" justify="center">
                <Form.Item>
                    {getFieldDecorator('new_password', {
                        rules: [{ required: true, message: 'Please input your new password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="new password" style={{width: '400px'}}/>
                    )}
                </Form.Item>
             </Row>
            <Row type="flex" justify="center">
             <Form.Item>
               <Button type="primary" htmlType="submit" style={{width: '200px'}} className="modify-pass-button">
                   Modify Password
               </Button>
             </Form.Item>
            </Row>
        </Form>
        </div>
        );
    }
}
const WrappedLogin = Form.create()(ModifyPassForm)
export default WrappedLogin;
