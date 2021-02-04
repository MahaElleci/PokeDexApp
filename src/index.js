import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind/index'


const overmind = createOvermind(config, {devtools: true}); 

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
