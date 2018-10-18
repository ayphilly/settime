import React from 'react';
import ReactDOM from 'react-dom';
import ToggleableTimerForm from './ToggleableTimerForm.test.js';

it('renders without crashing', () => {
    const div = document.getElementById('mrow');
    ReactDOM.render(<ToggleableTimerForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});