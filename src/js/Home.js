import React from 'react';
import ReactDOM from 'react-dom';
import App from '../component/App';
import RegistrationForm from '../component/RegistrationForm';
import NormalLoginForm from '../component/NormalLoginForm';
import { Form } from 'antd';

export default class Home extends React.Component {
    render() {
        let mystyle = {
            position: 'absolute',
            top: '35%',
            left: '35%'
        };
        const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
        return <div style={ mystyle }> <WrappedNormalLoginForm /> </div>;
    }
}