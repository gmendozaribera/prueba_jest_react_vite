import React from 'react';
import ReactDOM from 'react-dom/client';
// import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola soy Go" subtitle={3}/> */}
        <CounterApp value={5} />
    </React.StrictMode>
);

