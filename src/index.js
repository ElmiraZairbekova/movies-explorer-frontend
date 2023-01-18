// Импорт библиотек
import React from 'react';
import ReactDOM from 'react-dom';
// Импорт стилей
import './index.css';
// Импорт компонентов
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();