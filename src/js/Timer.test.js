import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

it('renders without crashing', () => {
    const div = document.createElement('mrow');
    ReactDOM.render(<Timer />, div);
    ReactDOM.unmountComponentAtNode(div);
});