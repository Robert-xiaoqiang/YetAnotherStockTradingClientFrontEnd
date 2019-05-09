import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from '../component/App';
import RegistrationForm from '../component/RegistrationForm';
import NormalLoginForm from '../component/NormalLoginForm';
import { Form } from 'antd';

export default class Home extends React.Component {
    render() {
        const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
        return <WrappedNormalLoginForm />;
    }
}