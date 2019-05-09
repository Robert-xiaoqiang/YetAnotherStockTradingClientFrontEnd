import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import BasicRoute from './router/BasicRoute';

ReactDOM.render(<BasicRoute />, document.getElementById('root'));
serviceWorker.unregister();
