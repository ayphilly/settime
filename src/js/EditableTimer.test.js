import React from 'react';
import ReactDOM from 'react-dom';
import EditableTimer from './EditableTimer';

it('renders without crashing', () => {
    const div = document.getElementById('mrow')
    ReactDOM.render(<EditableTimer />, div);
    ReactDOM.unmountComponentAtNode(div);
});