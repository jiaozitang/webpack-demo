import React from 'react'
import Hello from '@/Hello';

import '@/assets/css/test.module.scss'

function testTreeShaking () {
    let testShaking = 'testShaking'
    return testShaking
}


export default function App () {
    return (
        <div>
            hello react 111
            <Hello />
            <button onClick={() => import('lodash')}>加载lodash</button>
        </div>
    )
}
