import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bulma.css';
import './styles/index.css';
import './styles/custom.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));


