
import ReactDOM from 'react-dom';
import React from 'react'
import { getData } from './async.js';
import App from './App.jsx';

console.log('index')

getData().then(res => {
    console.log(res)
})

const a = document.createElement('div')
document.body.appendChild(a)

ReactDOM.render(<App />, document.body);