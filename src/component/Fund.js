import { Statistic, Card, Row, Col, Icon } from 'antd';
import React , { Component} from 'react';
import axios from 'axios';


export default class Fund extends Component{
    constructor(props){
        super(props);
        this.state = {
            avaFund : 0,
            frozenFund : 0
        }
    }

    componentDidMount() {

        axios.post('/api/myfund',
        {
            userinfo:this.userinfo
        })
        .then((response)=>{
            console.log(response);
 
            // console.log(typeof(response.data))
            let get_data = response.data;
            console.log(get_data[0].avaFund);
            console.log(get_data);
 
            this.setState({
                avaFund : get_data[0].avaFund,
                frozenFund : get_data[0].frozenFund
            });
        })
         .catch(function(error){
            console.log(error)
        });
         
    }

    render() {
        return(
            <div style={{background: '#ECECEC',height: '1000px' }}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="持有资金"
                                    value={this.state.avaFund}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<Icon type="check-circle" />}
                                    suffix="￥"
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="冻结资金"
                                    value={this.state.frozenFund}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="question-circle" />}
                                    suffix="￥"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}