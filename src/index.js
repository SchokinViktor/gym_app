import React from 'react';
import ReactDOM from 'react-dom';
import {BorwserRouter} from 'react-router-dom';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BorwserRouter>
        <App/>
    </BorwserRouter>
);