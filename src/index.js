//import _ from 'lodash';
import myName from './myName';
import './style.css';
import pic from './640px-Felis_catus-cat_on_snow.jpg';

function component() {
    const element = document.createElement('div');

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Silas')
    element.classList.add('hello');

    const myPic = new Image();
    myPic.src = pic;

    element.appendChild(myPic);

    return element;
}

document.body.appendChild(component());