import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Name from "./names/name/Name";
import Names from "./names/Names";
import App from "./App";

const root = document.getElementById('root');
const h1 = document.createElement('h1');
const text = document.createTextNode('hello world');
h1.appendChild(text);
root?.appendChild(h1);

// const h1react = React.createElement('h1', null, 'hello world!');
const name = 'jack'
const h1react = <h1>hello react {name}</h1>
ReactDOM.render(
    <App/>,
    root
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
