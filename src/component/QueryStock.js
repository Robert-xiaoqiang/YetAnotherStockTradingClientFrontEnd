import {
    Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message,
    Badge, Descriptions
} from 'antd';
import * as antd from 'antd';
import React from 'react';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class QueryStock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockID: null,
            stockName: '',
            latestTradingPrice: null,
            buyHighest: null,
            sellLowest: null,
            dayHighest: null,
            dayLowest: null,
            weekHighest: null,
            weekLowest: null,
            monthHighest: null,
            monthLowest: null,
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
                    values: values.stockName
                })
                axios.post(
                    '/api/querystock', {
                        stockID: values.stockID,
                        stockName: values.stockName
                    }
                ).then(response => {
                    // this.setState(response.data);
                    this.setState({
                        // stockID: values.stockID,
                        stockName: 'Naive SomeTimes',
                        latestTradingPrice: 65536,
                        buyHighest: 65536,
                        sellLowest: 65536,
                        dayHighest: 65536,
                        dayLowest: 65536,
                        weekHighest: 65536,
                        weekLowest: 65536,
                        monthHighest: 65536,
                        monthLowest: 65536,
                        information: '友谊第一, 比赛第二'
                    });
                }).catch(err => {
                    console.log(err);
                    this.setState({
                        // stockID: values.stockID,
                        stockName: 'Naive SomeTimes',
                        latestTradingPrice: 65536,
                        buyHighest: 65536,
                        sellLowest: 65536,
                        dayHighest: 65536,
                        dayLowest: 65536,
                        weekHighest: 65536,
                        weekLowest: 65536,
                        monthHighest: 65536,
                        monthLowest: 65536,
                        information: '友谊第一, 比赛第二'
                    });
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
                            <Input id="select-input" placeholder="Stock_id" />
                        )
                    }
                </FormItem >
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit">确定</Button>
                    &nbsp;&nbsp;&nbsp;
                </FormItem>
            </Form>
            <Descriptions title="Stock Info" bordered>
                <Descriptions.Item label="Stock ID">{this.state.stockID}</Descriptions.Item>
                <Descriptions.Item label="Stock Name">{this.state.stockName}</Descriptions.Item>
                <Descriptions.Item label="CST Time" span={3}>
                2019-06-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Latest Trading" span={3}>
                <Badge status="processing" text={this.state.latestTradingPrice} />
                </Descriptions.Item>
                <Descriptions.Item label="Day Lowest Price">${this.state.dayHighest}</Descriptions.Item>
                <Descriptions.Item label="Day Highest Price">${this.state.dayLowest}</Descriptions.Item>
                <Descriptions.Item label="Stock Info">
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