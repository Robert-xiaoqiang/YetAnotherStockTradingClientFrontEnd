import {
    Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message,
    Badge, Descriptions
} from 'antd';
import * as antd from 'antd';
import React from 'react';
import axios from 'axios';
import {queryapi} from '../json/config.json'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class QueryStock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockID: null,
			stockName: '',
			newest: null,
            nowSellLow: null,
            nowBuyHigh: null,
            dayHigh: null,
            dayLowe: null,
            weekHigh: null,
            weekLow: null,
            monthHigh: null,
            monthLow: null,
            information: ''
        }
    }

    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
			if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    stockID: values.stockID,
                    stockName: values.stockName
				})
                axios.get(
                    queryapi + '/api/querystock', {
						params: {
							stockID: values.stockID
						}	
						//stockName: values.stockName
                    }
				)
				.then((response) => {
					console.log(response);
					this.setState(response.data);
					console.log(response.data);
                }).catch(err => {
                    console.log(err);
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
            <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="股票代码">
                    {getFieldDecorator('stockID', {
                        rules: [{ required: true, message: '请输入股票代码！' }],
                    }
                    )(
                        <Input id="select-input" placeholder="Stock_id" />
                    )}
                </FormItem >

                <FormItem label="股票名字">
                    {
                        getFieldDecorator('stockName', {
                            rules: [{ required: false, message: '股票名字' }],
                        })(
                            <Input id="select-input" placeholder="Stock_name" />
                        )
                    }
                </FormItem >
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                    &nbsp;&nbsp;&nbsp;
                </FormItem>
            </Form>
            <Descriptions title="股票信息" bordered>
                <Descriptions.Item label="股票ID">{this.state.stockID}</Descriptions.Item>
                <Descriptions.Item label="股票名字">{this.state.stockName}</Descriptions.Item>
				<Descriptions.Item label="最新成交价格">${this.state.newest}</Descriptions.Item>
				<Descriptions.Item label="当前购买最高价格">${this.state.nowBuyHigh}</Descriptions.Item>
				<Descriptions.Item label="当前购买最高价格">${this.state.nowSellLow}</Descriptions.Item>
				<Descriptions.Item label="本日成交最高价格">${this.state.dayHigh}</Descriptions.Item>
				<Descriptions.Item label="本日成交最低价格">${this.state.dayLow}</Descriptions.Item>
				<Descriptions.Item label="本周成交最高价格">${this.state.weekHigh}</Descriptions.Item>
				<Descriptions.Item label="本周成交最低价格">${this.state.weekLow}</Descriptions.Item>
				<Descriptions.Item label="本月成交最高价格">${this.state.monthHigh}</Descriptions.Item>
				<Descriptions.Item label="本月成交最低价格">${this.state.monthLow}</Descriptions.Item>
				<Descriptions.Item label="重要公告">
                    <br />
                    { this.state.information }
                    <br />
                </Descriptions.Item>
            </Descriptions>
            </div>
        )
    }
}

const WrappedForm = Form.create()(QueryStock);

export default WrappedForm;
