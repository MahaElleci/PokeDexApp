import * as React from 'react';
import ReactDOM from 'react-dom';
import PokeDex from "./components/PokeDexWrapper/PokeDex";
import reportWebVitals from './reportWebVitals'; 
import { createOvermind } from 'overmind' 
import {config} from "./overmind";
import { Provider } from 'overmind-react'

import './index.css';
const overmind = createOvermind(config, {devtools: true}); 

ReactDOM.render(
  <Provider value={overmind}>
    <PokeDex />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
