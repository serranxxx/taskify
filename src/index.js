import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './Styles';
import { TodoApp } from './TodoApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <TodoApp />
  </BrowserRouter>
    
  // </React.StrictMode>
);


