import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./constuctors/App";
import reportWebVitals from "./constuctors/reportWebVitals";
import { Provider } from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
