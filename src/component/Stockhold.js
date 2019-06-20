import { Table } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import { ourapi } from '../json/config.json';

const columns = [{
    title: '代码',
    dataIndex: 'code',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.code.length - b.code.length,
}, {
    title: '名称',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '持有股数',
    dataIndex: 'number',
    sorter: (a, b) => a.number - b.number,
}, {
    title: '当前价格',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
}, {
    title: '持有成本',
    dataIndex: 'cost',
    sorter: (a, b) => a.cost - b.cost,
}, {
    title: '股票损益',
    dataIndex: 'income',
},
];



function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}


export default class Stockhold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userinfo: JSON.parse(localStorage.getItem("userinfo")).user_id
        }
    }
    componentDidMount() {

       axios.post(ourapi + '/api/myStock',
        {
            userinfo: this.state.userinfo
        })
        .then((response)=>{
            console.log(response);

            // console.log(typeof(response.data))
            let get_data = response.data;

            console.log(get_data);

            this.setState({
                data : get_data
            });
        })
        .catch(function(error){
            console.log(error)
        });
        
    }
    render() {
        let dataSource = this.state.data
        console.log(Array.isArray(dataSource)) 
        return (
            <div style={{ background: '#ECECEC', height: '500px' }}>
                <Table columns={columns} dataSource={dataSource} onChange={onChange} />
            </div>
        );
    }
}