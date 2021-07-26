import React from 'react'
import ReactDOM from 'react-dom' 
import { Hello } from './hello.js';

function Index () {
    console.log('index')
    return (
        <div className='index'>
            <p>hello index</p>
            <Hello />
        </div>
    )
}

const element = <Index />
const container = document.getElementById('container')
ReactDOM.render(element, container);
