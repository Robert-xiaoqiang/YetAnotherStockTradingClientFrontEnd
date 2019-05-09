import { Statistic, Card, Row, Col, Icon } from 'antd';
import React , { Component} from 'react';


export default class Fund extends Component{
    render() {
        return(
            <div style={{background: '#ECECEC',height: '1000px' }}>
            {/*<Row gutter={16}>*/}
            {/*    <Col span={12}>*/}
            {/*        <Statistic title="持有资金" value={12000} precision={2}/>*/}
            {/*    </Col>*/}
            {/*    <Col span={12}>*/}
            {/*        <Statistic title="冻结资金" value={8000} precision={2} />*/}
            {/*        /!*<Button style={{ marginTop: 16 }} type="primary">Recharge</Button>*!/*/}
            {/*    </Col>*/}
            {/*</Row>*/}
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="持有资金"
                                    value={13000.28}
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
                                    value={8000.00}
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