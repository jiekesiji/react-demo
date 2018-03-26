import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './normal/App';
// import ClickCounter from './day01/ClickCounter'
// import ControlPanel from './day02/props-state/view/ControlPanel'
import CounterSpanl from './day03/react-flux/CounterSpanl'
import registerServiceWorker from './normal/registerServiceWorker';



ReactDOM.render(<CounterSpanl/>,document.getElementById("root"))
registerServiceWorker();