import React from 'react'
import Hello from '@/Hello.tsx';
import Print from './print.js';
import '@/assets/css/test.module.scss'

function testTreeShaking () {
    let testShaking = 'testShaking'
    return testShaking
}


export default function App () {
    return (
        <div>
            hello react 11111
            <Hello />
            <button onClick={() => import('lodash')}>加载lodash</button>
            <button onClick={()=> Print('Hello webpack!')}>print</button>
        </div>
    )
}
