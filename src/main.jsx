import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock';
import App from './App';
import './styles/style.scss';

const root = ReactDOM.createRoot( document.getElementById('root') );

root.render(<App restaurants={restaurants}/>);