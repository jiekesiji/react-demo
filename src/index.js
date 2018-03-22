import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './normal/App';
import ClickCounter from './day01/ClickCounter'
import registerServiceWorker from './normal/registerServiceWorker';



ReactDOM.render(<ClickCounter/>,document.getElementById("root"))
registerServiceWorker();
