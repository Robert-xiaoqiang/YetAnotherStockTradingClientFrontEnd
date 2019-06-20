import React from 'react';
import {
    Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message
} from 'antd';
//import { rule } from 'postcss';
import axios from 'axios';
import { centerapi } from '../json/config.json';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class BuySellForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userinfo: JSON.parse(localStorage.getItem("userinfo")).username,
        }
    }

    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var seperator1 = "-";
                var now = new Date();

                var sec = ("0" + now.getSeconds()).slice(-2);

                var min = ("0" + now.getMinutes()).slice(-2);

                var hour = ("0" + now.getHours()).slice(-2);

                var day = ("0" + now.getDate()).slice(-2);

                var month = ("0" + (now.getMonth() + 1)).slice(-2);
                //拼装完整日期格式  
                var today = now.getFullYear() + (month) + (day) + (hour) + (min) + (sec);

                console.log(today);

                console.log({
                    ID: values.stockid,
                    User_ID: this.state.userinfo,
                    Buy: values.radioItem,
                    Amount: values.number,
                    Date: today,
                    Price: values.price
                })

                axios.post( centerapi + '/instruction-update',
                    {
                        ID: values.stockid,
                        User_ID: this.state.userinfo,
                        Buy: values.radioItem,
                        Amount: values.number,
                        Date: today,
                        Price: values.price
                    })
                    .then((response) => {
                        console.log(response);

                        // console.log(typeof(response.data))
                        let get_data = response.data;

                        console.log(get_data);

                    })
                    .catch(function (error) {
                        console.log(error)
                    });

            }
            else {
                message.error("输入信息不足!");
            }
        });

        // this.props.form.resetFields()
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        // const success = function () {
        //     message.success('操作成功!');
        // }

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="股票代码">
                    {getFieldDecorator('stockid', {
                        rules: [{ required: true, message: '请输入股票代码！' }],
                    }
                    )(
                        <Input id="select-input" placeholder="Stock_id" />
                    )}
                </FormItem >

                <FormItem label="购入/出售股数">
                    {getFieldDecorator('number', {
                        rules: [{ required: true, message: "请输入购买/出售股数！" }],
                    }
                    )(
                        <Input id="control-input" placeholder="Please enter..." />
                    )}

                </FormItem>

                <FormItem label="单价">
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: "请输入购买/出售单价！" }],
                    }
                    )(<Input type="textarea" id="control-textarea" rows="3" />
                    )}

                </FormItem>

                <FormItem label="购入/出售" >
                    {getFieldDecorator('radioItem', {
                        rules: [{ required: true, message: "请选择购买/出售！" }],
                    }
                    )
                        (<RadioGroup>
                            <Radio value="1">购入</Radio>
                            <Radio value="0">出售</Radio>
                        </RadioGroup>
                        )}
                </FormItem>

                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                    &nbsp;&nbsp;&nbsp;
                </FormItem>
            </Form>
        )
    }
}

BuySellForm = Form.create()(BuySellForm);

export default BuySellForm;