import {
    Form, Icon, Input, Button, Checkbox, message, Spin, Row, Col, Radio
} from 'antd';
import React, { Component } from 'react';
import axios from 'axios'
import {api} from '../json/config.json'

class ModifyPassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo: JSON.parse(localStorage.getItem("userinfo")).username,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values from Form: ', values);
                if (values.old_password == JSON.parse(localStorage.getItem("userinfo")).password) {
                    // axios.post('/api/modifypass',
                    // 	{
                    // 		ID: this.state.userinfo,
                    // 		Password: values.new_password,
                    // 		Type: values.type
                    // 	})
                    // 	.then((response) => {
                    // 		console.log(response)
                    // 		console.log(response.data)
                    // 	})
                    // 	 message.success('成功修改密码');
                    const data = new URLSearchParams();
                    Object.keys(values).forEach(key => {
                        data.append(key, values[key]);
                    });
                    fetch(api + "/account_set_login_pwd", {
                        body: data,
                        method: "POST",
                        credentials: 'include',
                        mode: "cors"
                    })
                    .then(res => res.json())
                    .then((json)=>{
                        if(json.status == 0){
                            message.success("修改密码成功")
                            localStorage.clear()
                            setTimeout(() => {
                                this.props.history.push({pathname:'/login', state: values});
                            }, 2000);
                        }
                        else {
                            message.error("修改密码失败")
                        }
                    })
                    .catch((err) => {
                        message.error(err)
                    })

                }
                else {
                    message.error('原密码有误');
                }
				/*axios.post('/api/modifypass',
                    {
                        ID: this.state.userinfo,
                        OldPass: values.old_password,
						NewPass: values.new_password,
						Type: values.type
                    })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
				message.success('成功修改密码'); //成功信息*/
            }
            else {
                message.error('输入信息不足')
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
                    <h3 className="login-space">请输入您的原密码、新密码以及希望修改的密码类型</h3>
                </Row>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Row type="flex" justify="center">
                        <Form.Item label="原密码">
                            {getFieldDecorator('old_login_pwd', {
                                rules: [{ required: true, message: '请输入原密码' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="old password" style={{ width: '400px' }} type="password" />
                            )}
                        </Form.Item>
                    </Row>
                    <Row type="flex" justify="center">
                        <Form.Item label="新密码">
                            {getFieldDecorator('login_pwd', {
                                rules: [{ required: true, message: '请输入新密码！' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="new password" style={{ width: '400px' }} />
                            )}
                        </Form.Item>
                    </Row>
                    {/* <Row type="flex" justify="center">
				<Form.Item>
					{getFieldDecorator('type', {
						rules: [{required: true, message: '请选择密码类型！'}],
					})
						(<Radio.Group>
							<Radio value="1">交易密码</Radio>
							<Radio value="0">取款密码</Radio> 
						</Radio.Group>)
					}
				</Form.Item>
			</Row> */}
                    <Row type="flex" justify="center">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '200px' }} className="modify-pass-button">
                                修改密码
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
