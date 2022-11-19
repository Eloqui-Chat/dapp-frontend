import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import { store } from "./store/store";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </Router>
  </Provider>

  // </React.StrictMode>
);
