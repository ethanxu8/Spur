import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // main component
import "@fontsource/jost"; // Defaults to weight 400
import "@fontsource/jost/400.css"; // Specify weight
import "@fontsource/jost/400-italic.css"; // Specify weight and style

import {Provider} from "react-redux";
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);