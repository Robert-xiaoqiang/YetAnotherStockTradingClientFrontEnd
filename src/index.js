import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import RegistrationForm from './component/RegistrationForm'
import * as serviceWorker from './serviceWorker';
import { Form } from 'antd';

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
ReactDOM.render(<WrappedRegistrationForm />, document.getElementById('root'));
serviceWorker.unregister();
