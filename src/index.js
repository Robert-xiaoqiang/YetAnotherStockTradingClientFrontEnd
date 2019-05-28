import React from 'react';
import ReactDOM from 'react-dom';

import APPRouter from './router/Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <APPRouter />,
    document.getElementById('app')
);
serviceWorker.unregister();