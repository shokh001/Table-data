import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Table from './components/Table';
import Context from './context'

ReactDOM.render(
  <React.StrictMode>
      <Context>
        <Table />
      </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
