import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('cont'));
registerServiceWorker();


