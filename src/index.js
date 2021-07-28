import _ from 'lodash';
import './style.css'
import './style2.scss'
import MyImage from './1.jpg'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack11'], ' ');
  element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);
  const myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());