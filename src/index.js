
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App >
            <Route path="about" >不会</Route>
            <Route path="inbox">你好</Route>
          </App>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

