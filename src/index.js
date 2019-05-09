import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import RegistrationForm from './component/RegistrationForm'
import * as serviceWorker from './serviceWorker';
import { Form } from 'antd';
import Login from './component/Login'

// const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
const WrappedRegistrationForm = Form.create({ name: 'login' })(Login);
ReactDOM.render(<WrappedRegistrationForm />, document.getElementById('root'));
serviceWorker.unregister();
