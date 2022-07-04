import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
