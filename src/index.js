
import ReactDOM from 'react-dom';
import React from 'react'
import { getData } from '@/async';
import App from '@/App';

console.log('index')

getData().then(res => {
    console.log(res)
})

const a = document.createElement('div')
document.body.appendChild(a)

ReactDOM.render(<App />, document.body);