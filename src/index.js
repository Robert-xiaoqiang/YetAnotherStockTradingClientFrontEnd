import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import RegistrationForm from './component/RegistrationForm';
import NormalLoginForm from './component/NormalLoginForm';
import BasicRoute from './router/BasicRoute';
import * as serviceWorker from './serviceWorker';
import { Form } from 'antd';

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
ReactDOM.render(<BasicRoute />, document.getElementById('root'));
serviceWorker.unregister();
