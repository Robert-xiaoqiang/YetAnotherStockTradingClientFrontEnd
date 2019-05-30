import React, { Component } from 'react';
import { Table, Divider, Tag, Button, message } from 'antd';
const { Column, ColumnGroup } = Table;


export default class HistoryRecord extends React.Component {
    constructor(props) {
      super(props);
      const data = [
        {
          key: '1',
          sellOrBuy: 'Sell',
          stockId: 'A007',
          number: 32,
          time: '今天',
          states: ['finished'],
        },
        {
          key: '2',
          sellOrBuy: 'Sell',
          stockId: 'A008 拼多多',
          number: 64,
          time: '今天',
          states: ['finished', '套死'],
        },
        {
          key: '3',
          sellOrBuy: 'Buy',
          stockId: 'B007',
          number: 32,
          time: '今天',
          states: ['交易中', '可撤销'],
        },
        {
          key: '4',
          sellOrBuy: 'Sell',
          stockId: 'B110',
          number: 32,
          time: '明天',
          states: ['交易中', '不可撤销'],
        },
      ];

      const columns = [
        {
          title: '买入/出售',
          dataIndex: 'sellOrBuy',
          key: 'sellOrBuy',
          render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: '交易时间',
          dataIndex: 'time',
          key: 'time',
          render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: '股票代码',
          dataIndex: 'stockId',
          key: 'stockId',
        },
        {
          title: '交易股数',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '状态',
          dataIndex: 'states',
          key: 'states',
          render: states => (
            <span>
              {states.map(state => {
                // let color = state.length > 5 ? 'geekblue' : 'green';
                let color = 'green';
                if (state === 'finished') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={state}>
                    {state.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => {
            if(record.states.indexOf('finished') !== -1) {
              return (
                <span>
                  <Button type="danger" onClick={this.handleDeleteRecord}>删除记录</Button>
                  <Divider type="vertical" />
                  <Button type="primary" disabled="true" onClick={this.handleCancelInstruction}>撤销指令</Button>
                </span>                
              )
            } else {
              return (
              <span>
                <Button type="danger" onClick={this.handleDeleteRecord}>删除记录</Button>
                <Divider type="vertical" />
                <Button type="primary" onClick={this.handleCancelInstruction}>撤销指令</Button>
              </span>
              )
            }
            
          },
        },
      ];
      this.state = {
        data: data,
        columns: columns
      };
    }
    componentDidMount() {

    }
    handleDeleteRecord = e => {

    }
    handleCancelInstruction = e => {
        message.success('I have posted everything!');
    };
    render() {
      return <Table columns={this.state.columns} dataSource={this.state.data} />;
    }
}