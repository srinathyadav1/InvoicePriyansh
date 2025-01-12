import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider  } from "./context/auth";
import StateContext from "./context/stateContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider >
      <StateContext>
        <App />
      </StateContext>
    </AuthProvider >
  </React.StrictMode>,
  document.getElementById("root")
);
