import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import StorePicker from './components/StorePicker';


render(<App />, document.querySelector('#main'));
