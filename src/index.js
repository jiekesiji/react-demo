import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './normal/App';
// import ClickCounter from './day01/ClickCounter'
import ControlPanel from './day02/props-state/view/ControlPanel'
import registerServiceWorker from './normal/registerServiceWorker';



ReactDOM.render(<ControlPanel/>,document.getElementById("root"))
registerServiceWorker();