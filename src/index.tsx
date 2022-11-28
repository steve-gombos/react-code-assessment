import React from 'react';
import ReactDOM from 'react-dom';
import './Infrastructure/index.css';
import { TasksLoader } from './Infrastructure/TasksLoader';

ReactDOM.render(
  <React.StrictMode>
    <TasksLoader />
  </React.StrictMode>
, document.getElementById('root'));
