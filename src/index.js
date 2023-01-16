// Импорт библиотек
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Импорт стилей
import "./index.css";
// Импорт компонентов
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
// Корневой элемент и рендер приложения
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();