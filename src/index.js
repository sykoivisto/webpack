//import _ from 'lodash';
import myName from './myName'

function component() {
    const element = document.createElement('div');

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Silas')

    return element;
}

document.body.appendChild(component());