import './hello.js'
import { getData } from './async.js';

console.log('index')

getData().then(res => {
    console.log(res)
})