import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//ReactDOM.render(<App />, document.getElementById('root'))
